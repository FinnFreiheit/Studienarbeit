import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {


  public pictures = [
    { src: "../../../assets/pic01.jpg"},
    { src: "../../../assets/pic02.jpg"},
    { src: "../../../assets/pic03.jpg"}
  ];

  currentPic = 0; 

  constructor() { }

  ngOnInit(): void {
  }

  onPreviousClick(){
    const previous = this.currentPic -1 ; 
    this.currentPic = previous < 0 ? this.pictures.length - 1: previous; 
    console.log("previous clicked, new current pic is: ", this.currentPic);
  }

  onNextClick() {
    const next = this.currentPic + 1;
    this.currentPic = next === this.pictures.length ? 0: next;
    console.log("next clicked, new current pic is: ", this.currentPic)
  }

}
