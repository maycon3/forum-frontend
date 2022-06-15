import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ApiService } from '../core/services/api.service';
import { Curso, Page } from './lista-curso/modal-curso/curso';

@Injectable()
export class CursoService {

  private cursoUrl = '/cursos';

  constructor(private apiService: ApiService) {}


  getPage(page: number):Observable<Page> {
    const params = new HttpParams()
      .append('page', page)
      .append('size', 10);
      return this.apiService.get(`${this.cursoUrl}`, params);
  }

  get(id: number): Observable<Curso> {
    return this.apiService.get(`${this.cursoUrl}/${id}`);
  }

  post(curso: Curso): Observable<void> {
    if(curso.id == null) {
      return this.apiService.post(`${this.cursoUrl}`,curso);
    }
    return this.put(curso);
  }

  private put(curso: Curso): Observable<void> {
    return this.apiService.put(`${this.cursoUrl}/${curso.id}`, curso);
  }



}
