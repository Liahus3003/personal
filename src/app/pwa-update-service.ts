import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";

@Injectable({
  providedIn: "root",
})

export class PWAUpdateService {

  constructor(private ngsw: SwUpdate) {
    if (!ngsw.isEnabled) {
      console.log('Service worker is disabled!');
    }
    this.checkForUpdate();
  }

  checkForUpdate(): void {
    this.ngsw.versionUpdates.subscribe(() => {
      this.promptUser();
    })
  }

  promptUser(): void {
    
  }

}
