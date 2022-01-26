import { Injectable } from '@angular/core';
import {CommentData} from "../interfaces/comment-data";
import {PictureData} from "../interfaces/picture-data";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getCommentsById(id: number | undefined): CommentData[]{
     if (id == 1) {
       return [
         {name: "finn", date: "10.11.1997", message: "Was ein schöner Tag", pictureID:1},
         {name: "mats", date: "11.04.1996", message: "Ich mag Fussball", pictureID:1},
         {name: "lu", date: "04.06.2003", message: "Dies Das Uni", pictureID:1}];
     } else if (id == 2){
       return [
         {name: "finn id 2", date: "10.11.1997", message: "Was ein schöner Tag", pictureID:2},
         {name: "mats id 2 ", date: "11.04.1996", message: "Ich mag Fussball", pictureID:2},
         {name: "lu id 2", date: "04.06.2003", message: "Dies Das Uni", pictureID:2}];
     } else {
       return [
         {name: "finn id 3", date: "10.11.1997", message: "Was ein schöner Tag", pictureID:3},
         {name: "mats id 3 ", date: "11.04.1996", message: "Ich mag Fussball", pictureID:3},
         {name: "lu id 3", date: "04.06.2003", message: "Dies Das Uni", pictureID:3}];
     }
  }

  getAllPictures(): PictureData[]{
    return [
      { src: "../../../assets/pic01.jpg", id: 1},
      { src: "../../../assets/pic02.jpg", id: 2},
      { src: "../../../assets/pic03.jpg", id: 3}];
  }
}
