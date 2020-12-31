import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { SlimScrollDirective } from './directives/slimscroll.directive';

@NgModule({
    declarations: [
        ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective
    ],
    imports: [],
    exports: [ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective],
    providers: []
})
export class CommonModule { }
