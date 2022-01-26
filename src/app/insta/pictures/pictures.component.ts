import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BackendService} from "../../services/backend.service";
import {Store} from "@ngrx/store";
import {loadPictureId} from "../store/insta.actions";

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {
  public pictures = this.bs.getAllPictures();
  currentPic = 0;
  @Output() pictureId = new EventEmitter<number>();

  constructor(private bs: BackendService, private store: Store) { }

  ngOnInit(): void {
    console.log("ngOnInit Picture");
  }

  onPreviousClick(){
    const previous = this.currentPic -1 ;
    this.currentPic = previous < 0 ? this.pictures.length - 1: previous;
    console.log("previous clicked, new current pic is: ", this.currentPic);
    //console.log("id", this.pictures[this.currentPic].id);
    this.pictureId.emit(this.pictures[this.currentPic].id);

    this.store.dispatch(loadPictureId({id: this.currentPic}));
  }

  onNextClick() {
    const next = this.currentPic + 1;
    this.currentPic = next === this.pictures.length ? 0: next;
    console.log("next clicked, new current pic is: ", this.currentPic)
    this.pictureId.emit(this.pictures[this.currentPic].id);

    this.store.dispatch(loadPictureId({id: this.currentPic}));
  }

}
