import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  age: number;

  constructor() { }

  ngOnInit(): void {
    this.calculate_age(new Date(1996, 2, 30));
  }

  calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
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
