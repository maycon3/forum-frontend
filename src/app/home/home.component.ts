import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HomeService } from "./home.service";
import { ListaCategoria } from "./modelo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaCategoria$ = this.homeService.getAll();

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

}
