import { Injectable } from "@angular/core";
import { SwUpdate } from "@angular/service-worker";
import { SnackBar } from "./shared-module/custom-layouts/snack-bar/snack-bar.model";
import { SnackBarService } from "./shared-module/custom-layouts/snack-bar/snack-bar.service";

@Injectable({
  providedIn: "root",
})
export class PWAUpdateService {
  constructor(
    private ngsw: SwUpdate,
    private snackBarService: SnackBarService
  ) {
    if (!ngsw.isEnabled) {
      console.log("Service worker is disabled!");
    }
    this.checkForUpdate();
  }

  checkForUpdate(): void {
    this.ngsw.versionUpdates.subscribe((version) => {
      if (version.type === "VERSION_DETECTED") {
        this.promptUser();
      }
    });
  }

  promptUser(): void {
    this.ngsw.activateUpdate().then(() => {
      const config: SnackBar = {
        id: 1,
        message: "A new update is available! Please click okay to update the app.",
        timeoutPeriod: 3000,
        showActions: true,
        action: () => document.location.reload(),
      };
      this.snackBarService.snackBar(config);
    });
  }
}
