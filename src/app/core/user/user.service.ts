import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";
import * as _ from 'lodash';

import jwt_decode from 'jwt-decode';
import { TokenService } from "../token/token.service";
import { User } from "./user";

const KEY = 'usuarioLogado';

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
    this.removeUsuarioLogado();
    this.userSubject.next(null);
  }

  isLogged(): boolean {
    return this.tokenService.hasToken();
  }

  getUsuario(): User {
     const usuarioString = window.localStorage.getItem(KEY) as string;
     const usuario = JSON.parse(usuarioString) as User;
     return usuario;
  }

  temPerfil(perfil: string): boolean {
    return _.includes(this.getUsuario().perfis,perfil);
  }

  private decodeAndNotify(): void {
    const token = this.tokenService.getToken() as string;
      const usuario = jwt_decode(token) as User;
      this.userSubject.next(usuario.nome+' '+usuario.sobrenome);
      if(!this.hasUsuario()) {
        this.setUsuario(usuario);
      }
  }

  private setUsuario(usuario: User): void {
    window.localStorage.setItem(KEY,JSON.stringify(usuario));
  }

  private hasUsuario(): boolean {
    return !!this.getUsuario();
  }

  private removeUsuarioLogado(): void {
    window.localStorage.removeItem(KEY);
  }

}




