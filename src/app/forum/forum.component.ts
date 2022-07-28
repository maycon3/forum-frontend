import { Component, OnInit } from "@angular/core";

import { NgxSpinnerService } from "ngx-spinner";

import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  homes$ = this.homeService.getAll();

  constructor(
    private homeService: HomeService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.spinner.hide();
  }

}
