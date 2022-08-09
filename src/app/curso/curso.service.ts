import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ApiService } from '../core/services/api.service';
import { Curso, Page } from './curso';

@Injectable()
export class CursoService {

  private cursoUrl = '/cursos';

  constructor(private apiService: ApiService) {}

  getPage(pagina: number): Observable<Page> {
    return this.apiService.get<Page>(`${this.cursoUrl}?page=${pagina}`);
  }

  salva(curso: Curso): Observable<void> {
    if(curso.id != null) {
      return this.update(curso);
    }
    return this.apiService.post(`${this.cursoUrl}`,curso);
  }

  private update(curso: Curso): Observable<void> {
    return this.apiService.put(`${this.cursoUrl}/${curso.id}`, curso);
  }

}
