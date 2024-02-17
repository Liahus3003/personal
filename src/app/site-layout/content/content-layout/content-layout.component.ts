import { Component, OnInit } from '@angular/core';
import { SiteFooterComponent } from '../site-footer/site-footer.component';
import { RouterOutlet } from '@angular/router';
import { SiteHeaderComponent } from '../site-header/site-header.component';

@Component({
    selector: 'app-content-layout',
    templateUrl: './content-layout.component.html',
    styleUrls: ['./content-layout.component.css'],
    standalone: true,
    imports: [SiteHeaderComponent, RouterOutlet, SiteFooterComponent]
})
export class ContentLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
