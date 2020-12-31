import { Component, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';

@Component({
  selector: 'app-site-layout-learning',
  templateUrl: './site-layout-learning.component.html',
  styleUrls: ['./site-layout-learning.component.less']
})
export class SiteLayoutLearningComponent implements OnInit {
  courses = null

  constructor(private $siteService: SiteLayoutService) { }

  ngOnInit() {
    this.getCourses();
  }

  getCourses(): void {
    this.$siteService.getCourses().subscribe((response) => {
      if (response) {
        this.courses = response;
      } else {
        this.courses = [];
      }
    }, (error) => {
      this.courses = [];
    });
  }

}
