import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from './content/interfaces/country.interface';
import { Observable } from 'rxjs';
import { Course } from './learning/interfaces/course.interface';
import { TechStack } from './portfolio/interface/tech-stack.interface';
import { Award } from './portfolio/interface/award.interface';
import { Education } from './portfolio/interface/education.interface';
import { WorkExperience } from './portfolio/interface/work-experience.interface';
import { Users } from './learning/interfaces/users.interface';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Search } from './learning/interfaces/search.interface';

@Injectable({
  providedIn: 'any'}
)
export class SiteLayoutService {

  constructor(private http:HttpClient) { }

    getCountries(): Observable<Country[]> {
        return this.http.get<Country[]>('../../../assets/JSON/countries.json');
    }

    getCourses(): Observable<Course[]> {
      return this.http.get<Course[]>('./../../assets/JSON/learning.json');
    }

    getTechStacks(): Observable<TechStack[]> {
      return this.http.get<TechStack[]>('./../../assets/JSON/tech-stack.json');
    }

    getAwards(): Observable<Award[]> {
      return this.http.get<Award[]>('./../../assets/JSON/awards.json');
    }

    getEducation(): Observable<Education[]> {
      return this.http.get<Education[]>('./../../assets/JSON/education.json');
    }

    getWorkExperience(): Observable<WorkExperience[]> {
      return this.http.get<WorkExperience[]>('./../../assets/JSON/work-experience.json');
    }

    getUsers(pageNumber: number): Observable<Users> {
      return this.http.get<Users>('https://reqres.in/api/users?page=' + pageNumber);
    }

    search(terms: Observable<string>) {
      return terms.pipe(debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchEntries(term)));
    }
  
    searchEntries(term: string): Observable<Search> {
      return this.http
          .get<Search>('https://api.cdnjs.com/libraries' + '?search=' + term);
    }
}