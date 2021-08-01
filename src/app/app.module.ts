import { CommonModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './application-layout/site-layout/site-layout.component';import { SiteLayoutService } from '@layout/site-layout.service';
import { PortfolioComponent } from './site-layout/portfolio/portfolio.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { CacheRouteReuseStrategy } from './common/util/cache-route-reuse-strategy';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [],
  providers: [SiteLayoutService,     {
    provide: RouteReuseStrategy,
    useClass: CacheRouteReuseStrategy,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
