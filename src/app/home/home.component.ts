import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HomeService } from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes$ = this.homeService.getAll();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
