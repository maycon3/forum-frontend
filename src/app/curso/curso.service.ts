import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "../core/services/api.service";
import { ListaCurso } from "./lista-curso/lista-curso";

@Injectable()
export class CursoService {

  private cursoUrl = '/cursos';

  constructor(private apiService: ApiService) {}

  getAll():Observable<ListaCurso[]> {
    return this.apiService.get(`${this.cursoUrl}/lista`);
  }

}
