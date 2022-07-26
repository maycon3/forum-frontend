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
          this.messageService.add({
            severity:'error',
            summary: 'Error',
            detail: error.error.message
          });
          erroMensagem = error;
          return throwError(erroMensagem);
        })
      )
  }

}