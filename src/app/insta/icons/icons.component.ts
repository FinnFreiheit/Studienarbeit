import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {

  @Output() commentClickFlag = new EventEmitter<boolean>();

  booleanToggle: boolean = false;
  likeCounter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }


  heartClick(){
    this.likeCounter = this.likeCounter + 1;
  }

  commentClick() {
    this.booleanToggle = !this.booleanToggle;
    this.commentClickFlag.emit(this.booleanToggle);
    console.log(this.booleanToggle);
  }
}
