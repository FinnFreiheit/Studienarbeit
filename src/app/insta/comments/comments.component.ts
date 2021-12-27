import { Component, OnInit } from '@angular/core';
import { CommentData} from "../../interfaces/comment-data";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentOne: CommentData = {name:"finn", date:"10.11.1997", message:"Was ein schöner Tag"};
  commentTwo: CommentData = {name: "mats", date:"11.04.1996", message:"Ich mag Fussball"};
  commentThree: CommentData = {name: "lu", date: "04.06.2003", message:"Dies Das Uni"};

  commentArray: CommentData[] = [this.commentOne, this.commentTwo, this.commentThree];
  constructor() { }

  ngOnInit(): void {
  }

}
