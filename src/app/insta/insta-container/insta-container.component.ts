import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insta-container',
  templateUrl: './insta-container.component.html',
  styleUrls: ['./insta-container.component.css']
})
export class InstaContainerComponent implements OnInit {

  clickFlag: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onCommentClickFlag(clickFlag: boolean) {
    this.clickFlag = clickFlag;
    console.log("from Parent", clickFlag);
  }
}
