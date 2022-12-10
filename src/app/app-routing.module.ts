import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';
import { CanDeactivatePortfolioGuard } from '@layout/guards/CanDeactivatePortfolioGuard.component';
import { PortfolioComponent } from '@layout/portfolio/portfolio.component';

const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent, canDeactivate: [CanDeactivatePortfolioGuard]},
  { path: 'learning', 
    loadChildren: () => import('@layout/learning/learning.module').then(m => m.LearnModule)
  },
  { path: 'coding', 
    loadChildren: () => import('@layout/content/content.module').then(m => m.ContentModule)
  },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full'},
  { path: '*', redirectTo: '/portfolio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
