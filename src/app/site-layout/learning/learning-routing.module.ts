import { SiteLayoutLearningComponent } from "./site-layout-learning.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LearningJavaComponent } from "./learning-java/learning-java.component";
import { LearningJavaScriptComponent } from "./learning-java-script/learning-java-script.component";
import { LearningCSSComponent } from "./learning-css/learning-css.component";
import { LearningReactComponent } from "./learning-react/learning-react.component";
import { LearningMySqlComponent } from "./learning-my-sql/learning-my-sql.component";
import { LearningAngularComponent } from "./learning-angular/learning-angular.component";
import { LearningBaseComponent } from "./learning-base/learning-base.component";
import { ChildNavigationComponent } from "./learning-angular/child-navigation/child-navigation.component";

const routes: Routes = [
  {
    path: "",
    component: SiteLayoutLearningComponent,
    children: [
      { path: "", component: LearningBaseComponent },
      { path: "java", component: LearningJavaComponent },
      { path: "javascript", component: LearningJavaScriptComponent },
      { path: "css", component: LearningCSSComponent },
      { path: "react", component: LearningReactComponent },
      { path: "mysql", component: LearningMySqlComponent },
      { path: "angular", component: LearningAngularComponent },
      { path: "detail/:id", component: ChildNavigationComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class LearnRoutingModule {}
