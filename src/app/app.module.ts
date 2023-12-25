import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutService } from '@layout/site-layout.service';
import { PortfolioComponent } from './site-layout/portfolio/portfolio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './shared-module/util/cache-route-reuse-strategy';
import { CustomModalComponent } from './shared-module/custom-layouts/custom-modal/custom-modal.component';
import { SnackBarComponent } from './shared-module/custom-layouts/snack-bar/snack-bar.component';
import { SharedModule } from './shared-module/shared.module';
import { SiteLayoutComponent } from '@layout/site-layout.component';
import { initializeApp } from "firebase/app";
initializeApp(environment.firebase);

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the app is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:3000'
        }),
        SiteLayoutComponent,
        PortfolioComponent,
        CustomModalComponent,
        SnackBarComponent
    ],
    exports: [],
    providers: [SiteLayoutService, {
            provide: RouteReuseStrategy,
            useClass: CacheRouteReuseStrategy,
        },],
    bootstrap: [AppComponent]
})
export class AppModule { }
