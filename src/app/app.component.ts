import { Component, OnInit } from '@angular/core';
import { PWAUpdateService } from './pwa-update-service';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  isNetworkOn = true;

  constructor(private pwaUpdateService: PWAUpdateService) {
    this.pwaUpdateService.checkForUpdate();
  }

  ngOnInit() {
    // Check Network Status
    this.updateNetworkStatus();
    window.addEventListener("online", this.updateNetworkStatus.bind(this));
    window.addEventListener("offline", this.updateNetworkStatus.bind(this));

    this.triggerSub();
  }

  updateNetworkStatus() {
    if(navigator.onLine && !this.isNetworkOn) {
      this.isNetworkOn = true;
    } else if (!navigator.onLine) {
      this.isNetworkOn = false;
    }
  }

  triggerSub() {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    const messaging = getMessaging();
    getToken(messaging, 
     { vapidKey: environment.vapidKey}).then(
       (currentToken) => {
         if (currentToken) {
           console.log("Hurraaa!!! we got the token.....");
           console.log(currentToken);
         } else {
           console.log('No registration token available. Request permission to generate one.');
         }
     }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
    });
  }

  listen() {
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });
  }
}
