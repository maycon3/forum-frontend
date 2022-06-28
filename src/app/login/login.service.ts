import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "../core/services/api.service";
import { NovoUsuario } from "./singup/novo-usuario";

@Injectable()
export class LoginService {

  private usuarioUrl = '/usuarios';

  constructor(private apiService: ApiService) {}

  criarConta(novoUsuario: NovoUsuario): Observable<void> {
    return this.apiService.post(`${this.usuarioUrl}`,novoUsuario);
  }

}
