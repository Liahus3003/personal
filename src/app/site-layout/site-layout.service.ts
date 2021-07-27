import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'any'}
)
export class SiteLayoutService {

  constructor(private http:HttpClient) { }

    getCountries() {
        return this.http.get('../../../assets/JSON/countries.json');
    }

    getCourses() {
      return this.http.get('./../../assets/JSON/learning.json');
    }

    getTechStacks() {
      return this.http.get('./../../assets/JSON/tech-stack.json');
    }

    getAwards() {
      return this.http.get('./../../assets/JSON/awards.json');
    }

    getEducation() {
      return this.http.get('./../../assets/JSON/education.json');
    }

    getWorkExperience() {
      return this.http.get('./../../assets/JSON/work-experience.json');
    }
}