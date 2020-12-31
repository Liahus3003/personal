import { CommonModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { SiteFooterComponent } from './application-layout/site-footer/site-footer.component';
import { SiteHeaderComponent } from './application-layout/site-header/site-header.component';
import { SiteLayoutComponent } from './application-layout/site-layout/site-layout.component';
import { SiteLayoutAppreciationComponent } from './site-layout/site-layout-appreciation/site-layout-appreciation.component';
import { SiteLayoutDashboardComponent } from './site-layout/site-layout-dashboard/site-layout-dashboard.component';
import { SiteLayoutLocationsComponent } from './site-layout/site-layout-locations/site-layout-locations.component';
import { SiteLayoutMyProfileComponent } from './site-layout/site-layout-my-profile/site-layout-my-profile.component';
import { SiteLayoutNetworkComponent } from './site-layout/site-layout-network/site-layout-network.component';
import { SiteLayoutServicesComponent } from './site-layout/site-layout-services/site-layout-services.component';
import { SiteLayoutService } from '@layout/site-layout.service';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    SiteLayoutDashboardComponent,
    SiteLayoutMyProfileComponent,
    SiteLayoutAppreciationComponent,
    SiteLayoutServicesComponent,
    SiteLayoutNetworkComponent,
    SiteLayoutLocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [SiteLayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
