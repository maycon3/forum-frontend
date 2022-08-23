import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {PaginatorModule} from 'primeng/paginator';

import { RoutingCursoModule } from "./routing-curso.module";
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoadButtonModule } from "../shared/components/load-button/load-button.module";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";
import { ModalCursoComponent } from "./modal-curso/modal-curso.component";
import { CursoService } from "./services/curso.service";
import { CategoriaModule } from "../categoria/categoria.module";
import { ModalModule } from "../shared/components/modal/modal.module";

@NgModule({
  declarations: [ListaCursoComponent,ModalCursoComponent],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ErroMsgModule,
    LoadButtonModule,
    PaginatorModule,
    ModalModule,
    RoutingCursoModule,
    CategoriaModule
  ],
  providers:[
    CursoService
  ]
})
export class CursoModule { }
