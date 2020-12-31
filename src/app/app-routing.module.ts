import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SiteLayoutAppreciationComponent } from './site-layout/site-layout-appreciation/site-layout-appreciation.component';
import { SiteLayoutDashboardComponent } from './site-layout/site-layout-dashboard/site-layout-dashboard.component';
import { SiteLayoutLocationsComponent } from './site-layout/site-layout-locations/site-layout-locations.component';
import { SiteLayoutMyProfileComponent } from './site-layout/site-layout-my-profile/site-layout-my-profile.component';
import { SiteLayoutNetworkComponent } from './site-layout/site-layout-network/site-layout-network.component';
import { SiteLayoutServicesComponent } from './site-layout/site-layout-services/site-layout-services.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: SiteLayoutDashboardComponent },
  { path: 'my-profile', component: SiteLayoutMyProfileComponent },
  { path: 'appreciations', component: SiteLayoutAppreciationComponent },
  { path: 'coding', 
    loadChildren: () => import('@layout/learning/learning.module').then(m => m.LearnModule)
  },
  { path: 'our-services', component: SiteLayoutServicesComponent },
  { path: 'network', component: SiteLayoutNetworkComponent },
  { path: 'locations', component: SiteLayoutLocationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }