import { Component, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';

@Component({
  selector: 'app-learning-base',
  templateUrl: './learning-base.component.html',
  styleUrls: ['./learning-base.component.less']
})
export class LearningBaseComponent implements OnInit {
  courses = null;

  constructor(private $siteService: SiteLayoutService) { }

  ngOnInit(): void {
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
