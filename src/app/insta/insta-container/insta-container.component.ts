import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-insta-container',
  templateUrl: './insta-container.component.html',
  styleUrls: ['./insta-container.component.css']
})
export class InstaContainerComponent implements OnInit {

  clickFlag: boolean = false;
  pictureId: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onCommentClickFlag(clickFlag: boolean) {
    this.clickFlag = clickFlag;
    console.log("from Parent", clickFlag);
  }

  onPictureId(pictureId: number){
    this.pictureId = pictureId;
    console.log("from Parent Picture ID", pictureId);
  }
}
