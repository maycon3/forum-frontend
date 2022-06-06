import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../core/services/api.service";
import { ListaCategoria } from "./modelo";

@Injectable()
export class HomeService {

 private homeUrl = '/homes';

  constructor(private apiService: ApiService) { }

  getAll():Observable<ListaCategoria[]> {
    return this.apiService.get<ListaCategoria[]>(`${this.homeUrl}`);
  }
}
