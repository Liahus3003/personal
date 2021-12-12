import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SiteLayoutService } from "@layout/site-layout.service";
import { Award } from "./interface/award.interface";
import { Education } from "./interface/education.interface";
import { TechStack } from "./interface/tech-stack.interface";
import { WorkExperience } from "./interface/work-experience.interface";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.less"],
})
export class PortfolioComponent implements OnInit {
  age: number = 0;
  techStack: TechStack[] = [];
  awards: Award[] = [];
  educationDetails: Education[] = [];
  workExperiences: WorkExperience[] = [];
  assetsPath = "./../../../assets";
  viewModeImgPath = "/Images/moon.svg";
  isDarkMode = false;
  resumePath = "/resume/Suhail_Resume_2k21.docx";

  constructor(
    private $siteLayoutService: SiteLayoutService,
    private $router: Router
  ) {}

  ngOnInit(): void {
    this.calculate_age(new Date(1996, 2, 30));
    this.getTechStacks();
    this.getAwards();
    this.getEducation();
    this.getWorkExperience();
  }

  calculate_age(dob: Date) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  getTechStacks(): void {
    this.$siteLayoutService.getTechStacks().subscribe(
      (response: TechStack[]) => {
        this.techStack = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getAwards() {
    this.$siteLayoutService.getAwards().subscribe(
      (response: Award[]) => {
        this.awards = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getEducation() {
    this.$siteLayoutService.getEducation().subscribe(
      (response: Education[]) => {
        this.educationDetails = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getWorkExperience() {
    this.$siteLayoutService.getWorkExperience().subscribe(
      (response: WorkExperience[]) => {
        this.workExperiences = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  toggleViewMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.viewModeImgPath = "/Images/sun.svg";
    } else {
      this.viewModeImgPath = "/Images/moon.svg";
    }
  }

  navigateToInternalSite(): void {
    this.$router.navigateByUrl("/learning");
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }

  hasAppeared(sectionIdentifier: string, elementRef: HTMLElement): void {
    if (sectionIdentifier === "odd") {
      elementRef.classList.add("animate-odd-block");
    } else {
      elementRef.classList.add("animate-even-block");
    }
  }

  navigateToBlock(id: string): void {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
