import { Component, OnInit } from '@angular/core';
import {SwPush} from "@angular/service-worker";
import {PushService} from "../../services/push.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  pushCapable?: boolean;
  readonly VAPID_PUBLIC_KEY = "BGN198g_25a8YR1G9fpxp2dhFyHbPZrfWM8UWOSgVebwUAfCQb9aQBRExDBF_5HKEWVqH-6oAEfHMCyH6Tfa080"


  constructor(private  swPush: SwPush,
              private pushService: PushService) { }

  ngOnInit(): void {
    /**
     * Abfrage ob der Browser Push händeln kann. Safarie kann das nicht. Falls Push nicht möglich,
     * Subscribe Anzeige nicht sichbar.
     */
    this.pushCapable = 'PushManager' in window;
  }

  /**
   * Push Registrierung beantragen
   */
  subscribeToNotifications(){
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(subscribeObj => {
        console.log(subscribeObj);
        this.pushService.addPushSubscriber(subscribeObj).subscribe(res => {
          console.log('Backend Response Push Subscription' + res);
        });
      })
      .catch(err => console.error("Could not subscribe to notifications", err));
  }

}
