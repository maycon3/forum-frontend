import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import jwt_decode from 'jwt-decode';
import { TokenService } from "../token/token.service";
import { User } from "./user";

@Injectable()
export class UserService {

  private userSubject = new BehaviorSubject<string| null>(null);

  constructor(private tokenService: TokenService) {
   this.tokenService.hasToken()
     && this.decodeAndNotify()

  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<string| null> {
    return this.userSubject.asObservable();
  }

  logout(): void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }


  private decodeAndNotify(): void {
    const token = this.tokenService.getToken() as string;
      const usuario = jwt_decode(token) as User;
      this.userSubject.next(usuario.nome+' '+usuario.sobrenome);
  }

}




