import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

import {ToastModule} from 'primeng/toast';

import { ApiService } from "./services/api.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { CredenciaisService } from "./services/credenciais.service";
import { TokenService } from "./token/token.service";
import { UserService } from "./user/user.service";
import { AuthService } from "./auth/auth.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RequestInterceptor } from "./auth/request.interceptor";
import { AuthGuard } from "./auth/auth.guard";
import { LoginGuard } from "./auth/login.guard";
import { PermissaoDirective } from "./permissao/permissao.directive";
import { ErrorInterceptor } from "./intercept/error.interceptor";
import { MenuComponent } from "./menu/menu.component";

@NgModule({
  declarations: [
    HeaderComponent,
    PermissaoDirective,
    MenuComponent
  ],
  imports: [
    CommonModule,
    ToastModule,
    NgxSpinnerModule,
    RouterModule
  ],
  exports: [HeaderComponent,NgxSpinnerModule],
  providers: [
    ApiService,
    CredenciaisService,
    TokenService,
    UserService,
    AuthService,
    AuthGuard,
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
