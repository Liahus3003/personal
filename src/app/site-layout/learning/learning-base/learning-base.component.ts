import { Component, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';
import { Course } from '../interfaces/course.interface';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-learning-base',
    templateUrl: './learning-base.component.html',
    styleUrls: ['./learning-base.component.less'],
    standalone: true,
    imports: [RouterLink]
})
export class LearningBaseComponent implements OnInit {
  courses: Course[] = [];

  constructor(private $siteService: SiteLayoutService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.$siteService.getCourses().subscribe((response: Course[]) => {
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
