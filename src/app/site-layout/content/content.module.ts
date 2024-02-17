import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentRoutingModule } from "./content-routing.module";
import { SiteLayoutAppreciationComponent } from "./site-layout-appreciation/site-layout-appreciation.component";
import { SiteLayoutDashboardComponent } from "./site-layout-dashboard/site-layout-dashboard.component";
import { SiteLayoutLocationsComponent } from "./site-layout-locations/site-layout-locations.component";
import { SiteLayoutMyProfileComponent } from "./site-layout-my-profile/site-layout-my-profile.component";
import { SiteLayoutNetworkComponent } from "./site-layout-network/site-layout-network.component";
import { SiteLayoutServicesComponent } from "./site-layout-services/site-layout-services.component";
import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { SiteFooterComponent } from "./site-footer/site-footer.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";

@NgModule({
    imports: [ContentRoutingModule, CommonModule, SiteHeaderComponent,
        SiteFooterComponent, SiteLayoutDashboardComponent,
        SiteLayoutMyProfileComponent,
        SiteLayoutAppreciationComponent,
        SiteLayoutServicesComponent,
        SiteLayoutNetworkComponent,
        SiteLayoutLocationsComponent,
        ContentLayoutComponent]
})

export class ContentModule { }