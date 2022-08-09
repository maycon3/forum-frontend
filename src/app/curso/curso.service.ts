import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { ApiService } from '../core/services/api.service';
import { Page } from './curso';

@Injectable()
export class CursoService {

  private cursoUrl = '/cursos';

  constructor(private apiService: ApiService) {}

  getPage(pagina: number): Observable<Page> {
    return this.apiService.get<Page>(`${this.cursoUrl}?page=${pagina}`);
  }

}
