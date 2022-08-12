import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";

import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/api";
import { catchError, Observable, throwError } from "rxjs";

import { UserService } from "../user/user.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private usuarioService: UserService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let erroMensagem: any;
          this.spinner.hide();
          this.tratamentoDeErro(error);
          erroMensagem = error;
          return throwError(erroMensagem);
        })
      )
  }

  private tratamentoDeErro(error: HttpErrorResponse): void {
    if(error.status == 401) {
      this.messageService.add({
        severity: 'error',
        summary: error.error.error ,
        detail: error.error.message
      });
      return;
    }

    if(error.status == 404) {
      this.messageService.add({
        severity: 'error',
        summary: '',
        detail: error.error.msg
      });
      return;
    }

    if(error.status == 403) {
      this.usuarioService.logout();
      this.router.navigate(['']);
      this.messageService.add({
        severity:'error',
        detail: 'Token expirado'
      });
      return;
    }
    this.toast(error);
  }

  private toast(error:HttpErrorResponse ): void {
    console.log('erro aqui: ', error);
    const erros: any[] = error.error.errors;
    erros.forEach( erro => {
      this.messageService.add({
        severity: 'error',
        summary: erro.campoNome ,
        detail: erro.mensagem
      });
    })
  }

}
