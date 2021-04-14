import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SiteLayoutAppreciationComponent } from './site-layout-appreciation/site-layout-appreciation.component';
import { SiteLayoutDashboardComponent } from './site-layout-dashboard/site-layout-dashboard.component';
import { SiteLayoutLocationsComponent } from './site-layout-locations/site-layout-locations.component';
import { SiteLayoutMyProfileComponent } from './site-layout-my-profile/site-layout-my-profile.component';
import { SiteLayoutNetworkComponent } from './site-layout-network/site-layout-network.component';
import { SiteLayoutServicesComponent } from './site-layout-services/site-layout-services.component';
import { ContentLayoutComponent } from './content-layout/content-layout.component';

const routes: Routes = [
    {
        path: '', component: ContentLayoutComponent, children: [
            { path: 'dashboard', component: SiteLayoutDashboardComponent },
            { path: 'my-profile', component: SiteLayoutMyProfileComponent },
            { path: 'appreciations', component: SiteLayoutAppreciationComponent },
            { path: 'our-services', component: SiteLayoutServicesComponent },
            { path: 'network', component: SiteLayoutNetworkComponent },
            { path: 'locations', component: SiteLayoutLocationsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class ContentRoutingModule { }