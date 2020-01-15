import { Component, OnInit } from '@angular/core';

import { pages } from '../pages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
