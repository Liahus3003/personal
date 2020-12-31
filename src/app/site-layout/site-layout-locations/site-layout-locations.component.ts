import { Component, OnInit } from '@angular/core';
import { SiteLayoutService } from '@layout/site-layout.service';

@Component({
  selector: 'app-site-layout-locations',
  templateUrl: './site-layout-locations.component.html',
  styleUrls: ['./site-layout-locations.component.less']
})
export class SiteLayoutLocationsComponent implements OnInit {

  alphabets = ['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  countries: any;
  mappedCountries: any= [];
  finalCountries = [];

  constructor(
    private siteLayoutService: SiteLayoutService
  ) { }

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.siteLayoutService.getCountries()
        .subscribe( (response) => {
          this.countries = response;
          this.splitCountries();
        });
  }

  splitCountries() {
    this.alphabets.forEach((character) => {
      this.mappedCountries = [];
      let countryCategory = { category: '', countries: [] };
      this.countries.forEach((country) => {
        if (character === country.name.substr(0,1)) {
          let countryObj = { countryName: '', regionName: '' };
          console.log('Character is '+ character + ': Country is '+country.name);
          countryObj.countryName = country.name;
          countryObj.regionName = country.region;
          this.mappedCountries.push(countryObj);
        }
      });
      countryCategory.category = character;
      countryCategory.countries = this.mappedCountries;
      this.finalCountries.push(countryCategory);
    }); 
  }
}
