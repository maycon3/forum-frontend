import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/app/core/services/api.service";

@Injectable()
export class ForGotService {

  private forgotUrl = '/auth';

  constructor(private apiService: ApiService) { }

  forgot(email: string): Observable<void> {
    return this.apiService.post(`${this.forgotUrl}/forgot`,email);
  }
}
