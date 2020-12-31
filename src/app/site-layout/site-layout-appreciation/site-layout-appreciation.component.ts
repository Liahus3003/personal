import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-layout-appreciation',
  templateUrl: './site-layout-appreciation.component.html',
  styleUrls: ['./site-layout-appreciation.component.css']
})
export class SiteLayoutAppreciationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

}
