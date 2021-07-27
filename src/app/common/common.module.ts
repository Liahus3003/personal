import { NgModule } from '@angular/core';
import { DeferLoadDirective } from './directives/animate-on-scroll.directive';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { SlimScrollDirective } from './directives/slimscroll.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { SortOrderPipe } from './pipes/sort-order.pipe';

@NgModule({
    declarations: [
        ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective,
        DeferLoadDirective,
        SortOrderPipe,
        FilterPipe
    ],
    imports: [],
    exports: [ClickOutsideDirective,
        OnlyNumberDirective,
        SlimScrollDirective,
        DeferLoadDirective,
        SortOrderPipe,
        FilterPipe],
    providers: []
})
export class CommonModule { }
