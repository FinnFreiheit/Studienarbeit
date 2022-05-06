import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {BackendService} from "../../services/backend.service";

interface Fileinfo {
  filename: string;
  filesize: number;
  filetype: string;
  lastModified: string;
  url: string;
}
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  title = 'fileupload';

  droppedfiles: NgxFileDropEntry[] = [];
  files: File[] = [];
  fileinfos: Fileinfo[] = [];
  objectURL: string = "";
  sanitizedUrl!: SafeUrl;
  showImg = false;

  constructor(private bs: BackendService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  dropped(files: NgxFileDropEntry[]) {
    console.log('fileDropped', files);
    this.droppedfiles = files;
    for (const droppedFile of files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.files.push(file);
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);

          // You could upload it like this:
          const formData = new FormData()
          formData.append('file', file, droppedFile.relativePath)

          this.bs.upload(formData)
            .subscribe(url => {
              console.log('url', url.url);
              this.fileinfos.push({
                filename: file.name,
                filesize: file.size,
                filetype: file.type,
                lastModified: new Date(file.lastModified).toLocaleDateString(),
                url: url.url
              });
            })

        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  fileOver(event: DragEvent){
    console.log('fileOver', event);
  }

  fileLeave(event: DragEvent){
    console.log('fileLeave', event);
  }

  showImage(url: string){
    this.bs.download(url)
      .subscribe(blob => {
        console.log('blob', blob);
        this.objectURL = URL.createObjectURL(blob);
        console.log('objectURL', this.objectURL);
        this.showImg = true;
        this.sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(this.objectURL);
      });

}

}
