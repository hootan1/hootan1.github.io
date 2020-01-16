import { Component, OnInit } from '@angular/core';

import { pages } from '../pages';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  pages = pages;
  private loadPage = "default";
  constructor() { }

  ngOnInit() {

  }

  navBarClick(page)
  {
    this.loadPage = page;
  }
}
