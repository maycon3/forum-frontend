import { animate, AUTO_STYLE, state, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from "@angular/core";

import { NgxSpinnerService } from "ngx-spinner";
import { map } from "rxjs";
import {faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { Home } from "./home";
import { HomeService } from "./home.service";

const DEFAULT_DURATION = 300;

@Component({
  selector: 'app-home',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css'],
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class ForumComponent implements OnInit {

  homes$ = this.homeService.getAll()
    .pipe(
      map(homes => this.collapsar(homes))
    );

  icones = {cima:faChevronDown, baixo:faChevronUp};
  collapsed = true;

  constructor(
    private homeService: HomeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.hide();

  }

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  expand(home: Home) {
    this.collapsed = !this.collapsed;
    home.collapse = this.collapsed;
    home.icone = true;
    setTimeout(() => {
      home.icone = false;
    }, 500);
  }

  private collapsar(homes: Home[]): Home[] {
     homes.forEach(h =>{
      h.collapse = true;
      h.icone = false;
     });
     return homes;
  }

}
