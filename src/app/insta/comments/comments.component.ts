import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { CommentData} from "../../interfaces/comment-data";
import {BackendService} from "../../services/backend.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() id: number | undefined;
  @ViewChild('comment') inputComment: any;


  commentArray!: CommentData[];
  commentData!: any;


  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    console.log("ID Comment ", this.id);
    this.commentArray = this.bs.getCommentsById(this.id);
  }

  submitComment(comment: string){
    console.log(comment);

    this.commentData = {
      userID: "dev",
      message: comment,
      pictureID: 1,
    }

    this.bs.createComment(this.commentData).subscribe(res => {
      console.log(res);
    });

    this.inputComment.nativeElement.value = '';
  }

}
