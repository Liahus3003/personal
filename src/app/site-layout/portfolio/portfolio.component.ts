import {
  Component,
  HostListener,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { DialogService } from "@layout/dialog.service";
import { SiteLayoutService } from "@layout/site-layout.service";
import { Observable } from "rxjs";
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
  blockSection: any;

  yearsSinceJoining: number = 0;
  techStack: TechStack[] = [];
  awards: Award[] = [];
  educationDetails: Education[] = [];
  workExperiences: WorkExperience[] = [];
  assetsPath = "./../../../assets";
  viewModeImgPath = "/Images/moon.svg";
  isDarkMode = false;
  resumePath = "/resume/Suhail_Resume_2k21.docx";
  isAdmin = false;
  scrollPosition: number = 0;
  activeSection = "about-section";
  scrollTimeoutId = 0;

  constructor(
    private $siteLayoutService: SiteLayoutService,
    private $router: Router,
    private $dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.blockSection = document.querySelectorAll('.block-section');
    this.calculate_years(new Date(2017, 6, 1));
    this.getTechStacks();
    this.getAwards();
    this.getEducation();
    this.getWorkExperience();
  }

  calculate_years(joiningDate: Date) {
    const diff_ms = Date.now() - joiningDate.getTime();
    const joined_dt = new Date(diff_ms);
    this.yearsSinceJoining = Math.abs(joined_dt.getUTCFullYear() - 1970);
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
      behavior: "smooth",
      block: "center"
    });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isAdmin) {
      return this.$dialogService.confirm("Are you sure?");
    }
    return true;
  }

  isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && rect.bottom >= 0 || rect.bottom > 0 && rect.bottom <= window.innerHeight || rect.top <= 0 && rect.bottom >= window.innerHeight
    );
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll($event: any) {
    if (this.scrollTimeoutId) {
      clearTimeout(this.scrollTimeoutId);
    }

    // Update the current scroll position
    this.scrollPosition = $event.target.scrollTop;

    this.scrollTimeoutId = setTimeout(() => {
      // Loop through the list of highlighted divs
    this.blockSection.forEach((div: HTMLElement) => {
      // Check if the div is in the viewport
      console.log('here');
      if (this.isInViewport(div)) {
        // Add the highlighting class to the div
        console.log('here inside');
        this.activeSection = div.id;
      }
    });
    }, 100);
  }
}
