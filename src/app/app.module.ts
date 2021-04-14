import { CommonModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { SiteLayoutComponent } from './application-layout/site-layout/site-layout.component';import { SiteLayoutService } from '@layout/site-layout.service';
import { PortfolioComponent } from './site-layout/portfolio/portfolio.component';

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
    CommonModule
  ],
  exports: [],
  providers: [SiteLayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
