import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

import { ApiService } from "../../core/services/api.service";
import { Page } from "../../shared/interfaces/paginacao";
import { Categoria } from "../interfaces/categoria";

@Injectable()
export class CategoriaService {

  private categoriaUrl = '/categorias';

  constructor(private apiService: ApiService){ }

  getAll():Observable<Categoria[]> {
    return this.apiService.get<Categoria[]>(`${this.categoriaUrl}/lista`)
      .pipe(
        map((categorias: Categoria[]) => categorias.sort((categoriaA, categoriaB) => this.ordenaPorNome(categoriaA,categoriaB)))
      )
  }

  getPage(pagina: number): Observable<Page<Categoria[]>> {
    return this.apiService.get<Page<Categoria[]>>(`${this.categoriaUrl}?page=${pagina}&sort=nome`)
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

  private ordenaPorNome(categoriaA: Categoria, categoriaB: Categoria): any {
     const nomeA = categoriaA.nome.toLocaleLowerCase();
     const nomeB = categoriaB.nome.toLocaleLowerCase();
     if(nomeA > nomeB) {
      return 1;
     }
     if(nomeA < nomeB) {
      return -1;
     }
     return 0;
  }
}
