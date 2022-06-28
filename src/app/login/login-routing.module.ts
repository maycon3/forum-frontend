import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginGuard } from "../core/auth/login.guard";

import { LoginComponent } from "./login.component";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate:[LoginGuard],
    children:[
      {
        path:'',
        component: SigninComponent,
      },
      {
        path:'singup',
        component: SingupComponent,
      }
    ]
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class LoginRoutingModule { }
