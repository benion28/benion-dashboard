import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sidebarOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSidebar(event) {
    this.sidebarOpen = !this.sidebarOpen;
  }

}