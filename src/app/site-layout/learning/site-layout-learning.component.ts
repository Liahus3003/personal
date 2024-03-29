import { Component, HostListener, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-site-layout-learning',
    templateUrl: './site-layout-learning.component.html',
    styleUrls: ['./site-layout-learning.component.less'],
    standalone: true,
    imports: [RouterLink, RouterOutlet]
})
export class SiteLayoutLearningComponent implements OnInit {
  courses = null;
  year = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let element = document.querySelector(".header") as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add("header-scroll");
    } else {
      element.classList.remove("header-scroll");
    }
  }

}
