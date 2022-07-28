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
          this.toast(error);
          console.log(error);
          erroMensagem = error;
          return throwError(erroMensagem);
        })
      )
  }

  private toast(error:HttpErrorResponse ): void {
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
