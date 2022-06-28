import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { Credencias } from "src/app/login/signin/credencias";

import { ApiService } from "../services/api.service";
import { UserService } from "../user/user.service";

@Injectable()
export class AuthService {

  private loginUrl = '/login';

  constructor(
    private http: HttpClient,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  authenticate(credenciais: Credencias):Observable<any> {
    return this.http.post(`${this.apiService.apiHostUrl}${this.loginUrl}`,
     credenciais,
     {observe: 'response'}
     )
      .pipe(tap(res => {
        const authToken = res.headers.get('Authorization') as any;
        this.userService.setToken(authToken);
      }));
  }
}
