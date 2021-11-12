import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SnackBar } from './snack-bar.model';

@Injectable({ providedIn: 'root' })
export class SnackBarService {
    private subject = new BehaviorSubject<SnackBar>(new SnackBar());
    private defaultId = 1;

    // enable subscribing to alerts observable
    onSnackBar(): Observable<SnackBar> {
        return this.subject.asObservable();
    }

    // main alert method    
    snackBar(snackBar: SnackBar) {
        snackBar.id = snackBar.id || this.defaultId;
        this.subject.next(snackBar);
    }

    // clear alerts
    clear(id = this.defaultId) {
        // this.subject.next(new SnackBar({ id }));
    }
}