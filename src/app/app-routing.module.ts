import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { PortfolioComponent } from '@layout/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'site-content', 
    loadChildren: () => import('@layout/learning/learning.module').then(m => m.LearnModule)
  },
  { path: 'coding', 
    loadChildren: () => import('@layout/content/content.module').then(m => m.ContentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }