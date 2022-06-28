import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./login.component";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoginRoutingModule } from "./login-routing.module";
import { LoginService } from "./login.service";
import { AlertModule } from "../shared/components/alert/alert.module";

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SingupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErroMsgModule,
    AlertModule,
    LoginRoutingModule
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
