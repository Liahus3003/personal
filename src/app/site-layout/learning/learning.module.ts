import { NgModule } from "@angular/core";
import { SiteLayoutLearningComponent } from "./site-layout-learning.component";
import { LearnRoutingModule } from "./learning-routing.module";
import { CommonModule } from "@angular/common";
import { LearningJavaScriptComponent } from "./learning-java-script/learning-java-script.component";
import { LearningCSSComponent } from "./learning-css/learning-css.component";
import { LearningReactComponent } from "./learning-react/learning-react.component";
import { LearningMySqlComponent } from "./learning-my-sql/learning-my-sql.component";
import { LearningJavaComponent } from "./learning-java/learning-java.component";
import { LearningAngularComponent } from "./learning-angular/learning-angular.component";
import { LearningBaseComponent } from "./learning-base/learning-base.component";
import { InfiniteScrollComponent } from "./learning-angular/topics/lazy-scroll/infinite-scroll/infinite-scroll.component";
import { ChildNavigationComponent } from "./learning-angular/child-navigation/child-navigation.component";

@NgModule({
    imports: [LearnRoutingModule, CommonModule, SiteLayoutLearningComponent,
        LearningJavaScriptComponent,
        LearningCSSComponent,
        LearningReactComponent,
        LearningMySqlComponent,
        LearningJavaComponent,
        LearningAngularComponent,
        LearningBaseComponent,
        InfiniteScrollComponent,
        ChildNavigationComponent],
    providers: [],
})
export class LearnModule {}
