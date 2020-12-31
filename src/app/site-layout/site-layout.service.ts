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

}