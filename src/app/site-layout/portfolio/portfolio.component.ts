import { Component, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  age: number;
  techStack: unknown[] = [];
  awards: unknown[] = [];
  educationDetails: unknown[] = [];
  workExperiences: unknown[] = [];
  assetsPath = "./../../../assets";

  constructor(private $siteLayoutService: SiteLayoutService) { }

  ngOnInit(): void {
    this.calculate_age(new Date(1996, 2, 30));
    this.getTechStacks();
    this.getAwards();
    this.getEducation();
    this.getWorkExperience();
  }

  calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
    this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getTechStacks(): void {
    this.$siteLayoutService.getTechStacks().subscribe((response: unknown[]) => {
      this.techStack = response;
    }, error => {
      console.error(error);
    });
  }

  getAwards() {
    this.$siteLayoutService.getAwards().subscribe((response: unknown[]) => {
      this.awards = response;
    }, error => {
      console.error(error);
    });
  }

  getEducation() {
    this.$siteLayoutService.getEducation().subscribe((response: unknown[]) => {
      this.educationDetails = response;
    }, error => {
      console.error(error);
    });
  }

  getWorkExperience() {
    this.$siteLayoutService.getWorkExperience().subscribe((response: unknown[]) => {
      this.workExperiences = response;
    }, error => {
      console.error(error);
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  hasAppeared(sectionIdentifier: string, elementRef: HTMLElement) {
    if (sectionIdentifier === 'odd') {
      elementRef.classList.add('animate-odd-block');
    } else {
      elementRef.classList.add('animate-even-block');
    }
  }

}
