import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RoutingCursoModule } from "./routing-curso.module";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";

@NgModule({
  declarations: [

  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErroMsgModule,
    RoutingCursoModule
  ],
  providers:[
  ]
})
export class CursoModule { }
