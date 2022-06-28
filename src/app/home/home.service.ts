import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ApiService } from '../core/services/api.service';
import { Home } from './home';

@Injectable()
export class HomeService {

 private homeUrl = '/home';

  constructor(private apiService: ApiService) { }

  getAll():Observable<Home[]> {
    return this.apiService.get(`${this.homeUrl}`);
  }
}
