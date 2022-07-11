import { Component, OnInit } from "@angular/core";

import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  homes$ = this.homeService.getAll();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
