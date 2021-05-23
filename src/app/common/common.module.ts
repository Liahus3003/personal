import { NgModule } from '@angular/core';
import { DeferLoadDirective } from './directives/animate-on-scroll.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { SlimScrollDirective } from './directives/slimscroll.directive';

@NgModule({
    declarations: [
        ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective,
        DeferLoadDirective
    ],
    imports: [],
    exports: [ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective,
        DeferLoadDirective],
    providers: []
})
export class CommonModule { }
