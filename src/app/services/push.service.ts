import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class PushService {

  private api = 'http://localhost:3000';
  constructor( private http: HttpClient) { }

  addPushSubscriber(sub:PushSubscription){
    return this.http.post(this.api + '/subscription',sub);
  }
}
