import { Injectable } from '@angular/core';


import { ApiService } from '../core/services/api.service';

@Injectable()
export class CursoService {

  private cursoUrl = '/cursos';

  constructor(private apiService: ApiService) {}


}
