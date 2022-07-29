import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginService } from "./login.service";
import { RecuperaSenhaComponent } from "./recupera-senha/recupera-senha.component";
import { RecuperaSenhaService } from "./recupera-senha/recupera-senha.service";

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SingupComponent,
    RecuperaSenhaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErroMsgModule,
    LoginRoutingModule
  ],
  providers:[
    LoginService,
    RecuperaSenhaService
  ]
})
export class LoginModule { }
