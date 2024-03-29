import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-site-layout-my-profile",
    templateUrl: "./site-layout-my-profile.component.html",
    styleUrls: ["./site-layout-my-profile.component.less"],
    standalone: true,
})
export class SiteLayoutMyProfileComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  expand() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (!(dots && moreText && btnText)) {
      return;
    }

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
}
