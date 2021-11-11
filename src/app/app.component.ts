import { Component, OnInit } from '@angular/core';
import { PWAUpdateService } from './pwa-update-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isNetworkOn = true;

  constructor(private pwaUpdateService: PWAUpdateService) {
    this.pwaUpdateService.checkForUpdate();
  }

  ngOnInit() {
    // Check For Updates
    // this.ngsw.versionUpdates.subscribe(update => {
    //   if (update.type === 'VERSION_DETECTED') {
    //     this.ngsw.activateUpdate().then(() => {
    //       console.log('App is Updated!');
    //       location.reload();
    //     })
    //   }
    // })

    // Check Network Status
    this.updateNetworkStatus();
    window.addEventListener("online", this.updateNetworkStatus.bind(this));
    window.addEventListener("offline", this.updateNetworkStatus.bind(this));
  }

  updateNetworkStatus() {
    if(navigator.onLine && !this.isNetworkOn) {
      console.log('is Online');
      this.isNetworkOn = true;
    } else if (!navigator.onLine) {
      console.log('is Offline');
      this.isNetworkOn = false;
    }
  }


}
