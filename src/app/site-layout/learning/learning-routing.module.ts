import { SiteLayoutLearningComponent } from './site-layout-learning.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LearningJavaComponent } from './learning-java/learning-java.component';
import { LearningJavaScriptComponent } from './learning-java-script/learning-java-script.component';
import { LearningCSSComponent } from './learning-css/learning-css.component';
import { LearningReactComponent } from './learning-react/learning-react.component';
import { LearningMySqlComponent } from './learning-my-sql/learning-my-sql.component';
import { LearningAngularComponent } from './learning-angular/learning-angular.component';

const routes: Routes = [
    { path: '', component: SiteLayoutLearningComponent },
    { path: 'coding/java', component: LearningJavaComponent },
    { path: 'coding/javascript', component: LearningJavaScriptComponent },
    { path: 'coding/css', component: LearningCSSComponent },
    { path: 'coding/react', component: LearningReactComponent },
    { path: 'coding/mysql', component: LearningMySqlComponent },
    { path: 'coding/angular', component: LearningAngularComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})

export class LearnRoutingModule { }