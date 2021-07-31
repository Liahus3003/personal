import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnDestroy,
} from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { map, startWith } from "rxjs/operators";

const breakpoints = {
  xSmall: "(max-width: 599px)",
  small: "(min-width: 600px) and (max-width: 959px)",
  medium: "(min-width: 960px) and (max-width: 1279px)",
  large: "(min-width: 1280px) and (max-width: 1919px)",
  xLarge: "(min-width: 1920px)",
};

@Directive({
  selector: "[matches]",
})
export class MatchesDirective implements OnInit, OnDestroy {
  @Input() matches: keyof typeof breakpoints;
  mediaSubscription: Subscription;

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) {}

  ngOnInit() {
    const breakpoint = breakpoints[this.matches];

    this.mediaSubscription = fromMediaQuery(breakpoint).subscribe((matches) => {
      matches ? this.vcr.createEmbeddedView(this.tpl) : this.vcr.clear();
    });
  }

  ngOnDestroy() {
    if (this.mediaSubscription) {
      this.mediaSubscription.unsubscribe();
    }
  }
}

function fromMediaQuery(breakpoint: string) {
  const media = matchMedia(breakpoint);

  return fromEvent(media, "change").pipe(
    map((e: MediaQueryListEvent) => e.matches),
    startWith(media.matches)
  );
}

// https://netbasal.com/improved-responsiveness-for-improved-performance-in-angular-apps-57bd49a71d17
