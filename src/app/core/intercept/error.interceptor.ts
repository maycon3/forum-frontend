import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { NgxSpinnerService } from "ngx-spinner";
import { MessageService } from "primeng/api";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private messageService: MessageService,
    private spinner: NgxSpinnerService
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
