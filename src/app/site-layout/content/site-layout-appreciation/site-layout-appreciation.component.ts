import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-site-layout-appreciation',
    templateUrl: './site-layout-appreciation.component.html',
    styleUrls: ['./site-layout-appreciation.component.css'],
    standalone: true
})
export class SiteLayoutAppreciationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drag(event: DragEvent) {
    event.dataTransfer && event.dataTransfer.setData("text", (<HTMLElement>event.target).id);
  }

  drop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer) {
      const data = event.dataTransfer.getData("text");
      (<HTMLElement>event.target).appendChild(document.getElementById(data) as Node);
    }
  }

}
