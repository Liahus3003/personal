import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export interface CanDeactivatePortfolio {
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
  }
  
  @Injectable({
    providedIn: 'root'}
  )  
  export class CanDeactivatePortfolioGuard  {
    canDeactivate(component: CanDeactivatePortfolio, 
             route: ActivatedRouteSnapshot, 
             state: RouterStateSnapshot) {
  
       let url: string = state.url;  
       return component.canDeactivate ? component.canDeactivate() : true;
    }
  } 