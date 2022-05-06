import { Injectable } from '@angular/core';
import {CommentData} from "../interfaces/comment-data";
import {PictureData} from "../interfaces/picture-data";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserData} from "../interfaces/user-data";


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  getAllUser(): Observable<any>{
    return this.http.get<any>(`${this.api}/users`);
  }

  createUser(data: UserData): Observable<UserData>{
    return this.http.post<UserData>(this.api+ '/users', data);
  }

  createComment(data:any): Observable<any>{
    return this.http.post<any>(this.api + '/comments', data);
  }

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

  upload(file: FormData): Observable<{url:string}> {
    return this.http.post<{url:string}>(this.api + '/upload', file, {responseType: 'json'});
  }


  download(url: string): Observable<Blob> {
    return this.http.get(url, {responseType:'blob'});
  }
}
