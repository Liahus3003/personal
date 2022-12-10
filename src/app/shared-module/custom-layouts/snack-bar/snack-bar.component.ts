import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SnackBar } from './snack-bar.model';
import { SnackBarService } from './snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.less']
})
export class SnackBarComponent implements OnInit, OnDestroy {

  config: SnackBar | null = null;

  alertSubscription: Subscription;

  constructor(private snackBarService: SnackBarService) { 
    this.alertSubscription = this.snackBarService.onSnackBar().subscribe((config) => {
      this.config = config;
      if (!config.showActions) {
        setTimeout(() => {
          this.cancel();
        }, config.timeoutPeriod);
      }
    });
  }

  ngOnInit(): void {
  }

  confirm(): void {
    if (this.config && this.config.action) {
      this.config.action();
    }
  }

  cancel(): void {
    this.config = null;
    // this.snackBarService.clear();
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
