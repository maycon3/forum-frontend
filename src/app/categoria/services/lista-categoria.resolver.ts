import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Categoria } from "../interfaces/categoria";
import { CategoriaService } from "./categoria.service";

@Injectable()
export class ListaCategoriaResolver implements Resolve<Observable<Categoria[]>> {

  constructor(private categoriaService: CategoriaService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Categoria[]> | Observable<Observable<Categoria[]>> | Promise<Observable<Categoria[]>> {
    return this.categoriaService.getAll();
  }

}
