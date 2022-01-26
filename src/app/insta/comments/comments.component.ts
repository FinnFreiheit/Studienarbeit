import {Component, Input, OnInit} from '@angular/core';
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


  commentArray!: CommentData[];


  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    console.log("ID Comment ", this.id);
    this.commentArray = this.bs.getCommentsById(this.id);
  }



}
