import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";

import { Page } from "./modal-curso/curso";
import { CursoService } from "../curso.service";

@Injectable()
export class CursoResolve implements Resolve<Page> {

  constructor(private cursoService: CursoService) { }

  resolve(route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<Page> {
    return this.cursoService.getPage(0);
  }

}
