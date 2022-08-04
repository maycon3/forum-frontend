import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RoutingCursoModule } from "./routing-curso.module";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoadButtonModule } from "../shared/components/load-button/load-button.module";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";

@NgModule({
  declarations: [ListaCursoComponent],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErroMsgModule,
    LoadButtonModule,
    RoutingCursoModule
  ],
  providers:[
  ]
})
export class CursoModule { }
