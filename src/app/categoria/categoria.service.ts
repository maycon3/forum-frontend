import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "../core/services/api.service";
import { Categoria } from "./categoria";

@Injectable({'providedIn':'root'})
export class CategoriaService {

  private categoriaUrl = '/categorias';

  constructor(private apiService: ApiService){ }

  getAll():Observable<Categoria[]> {
    return this.apiService.get(`${this.categoriaUrl}/lista`);
  }

  get(id: number):Observable<Categoria> {
    return this.apiService.get(`${this.categoriaUrl}/${id}`);
  }

  post(categoria: Categoria):Observable<void> {
    if(categoria.id){
      return this.put(categoria);
    }
    return this.apiService.post(`${this.categoriaUrl}`,categoria);
  }

  private put(categoria: Categoria):Observable<void> {
    return this.apiService.put(`${this.categoriaUrl}/${categoria.id}`,categoria);
  }
}
