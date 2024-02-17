import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-site-layout',
    templateUrl: './site-layout.component.html',
    styleUrls: ['./site-layout.component.less'],
    standalone: true,
    imports: [RouterOutlet]
})
export class SiteLayoutComponent implements OnInit {

  isNavOpen = false;

  constructor() { }

  ngOnInit() {
  }

  onClickedOutside(e: Event) {
    this.isNavOpen = false;
  }

}
