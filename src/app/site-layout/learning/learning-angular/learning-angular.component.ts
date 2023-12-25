import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SiteLayoutService } from "@layout/site-layout.service";
import { Subject } from "rxjs";
import { Result, Search } from "../interfaces/search.interface";
import { UserData, Users } from "../interfaces/users.interface";
import { SlicePipe } from "@angular/common";
import { InfiniteScrollComponent } from "./topics/lazy-scroll/infinite-scroll/infinite-scroll.component";

@Component({
    selector: "app-learning-angular",
    templateUrl: "./learning-angular.component.html",
    styleUrls: ["./learning-angular.component.less"],
    standalone: true,
    imports: [InfiniteScrollComponent, SlicePipe],
})
export class LearningAngularComponent implements OnInit {
  key: string = "";
  users: UserData[] = [];
  pageNumber = 1;
  searchTerm$ = new Subject<string>();
  results!: Result[];

  constructor(
    private $siteLayoutService: SiteLayoutService,
    private $router: Router
  ) {
    this.$siteLayoutService
      .search(this.searchTerm$)
      .subscribe((results: Search) => {
        this.results = results.results;
      });
  }

  ngOnInit(): void {}

  changeKey(key: string): void {
    this.key = key;
    this.pageNumber = 1;
    switch (key) {
      case "scroll":
        this.getUsers();
        break;
    }
  }

  getUsers(): void {
    this.$siteLayoutService
      .getUsers(this.pageNumber)
      .subscribe((response: Users) => {
        if (response && response.data) {
          this.users.length
            ? (this.users = this.users.concat(response.data))
            : (this.users = response.data);
        }
      });
  }

  navigateToUser(id: number): void {
    this.$router.navigateByUrl("learning/detail/" + id);
  }

  searchKeyword($event: Event): void {
    this.searchTerm$.next((<HTMLInputElement>$event.target).value);
  }

  onScroll(): void {
    if (this.users.length) {
      this.pageNumber++;
      this.getUsers();
    }
  }

  userTrackBy(index: number, user: UserData) {
    return user.id;
  }
}
