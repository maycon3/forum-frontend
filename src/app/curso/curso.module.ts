import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsModalService } from "ngx-bootstrap/modal";
import { ModalModule } from 'ngx-bootstrap/modal';

import { RoutingCursoModule } from "./routing-curso.module";
import { CursoService } from "./curso.service";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";
import { ModalCursoComponent } from "./lista-curso/modal-curso/modal-curso.component";
import { ModalCursoService } from "./lista-curso/modal-curso/modal-curso.service";
import { CategoriaService } from "../categoria/categoria.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaginatorModule } from "../shared/components/paginator/paginator.module";
import { CursoResolve } from "./lista-curso/curso.resolve";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";

@NgModule({
  declarations: [
    ListaCursoComponent,
    ModalCursoComponent
  ],
  imports:[
    CommonModule,
    FormsModule,ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ErroMsgModule,
    PaginatorModule,
    RoutingCursoModule
  ],
  providers:[
   // CursoService,
    ModalCursoService,
    CategoriaService,
    CursoResolve,
    BsModalService
  ]
})
export class CursoModule { }
