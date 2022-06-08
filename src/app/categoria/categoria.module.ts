import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BsModalService } from "ngx-bootstrap/modal";
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaService } from "./categoria.service";
import { ListaCategoriaComponent } from "./lista-categoria.component";
import { ModalCategoriaComponent } from "./modal-categoria/modal-categoria.component";
import { ModalCategoriaService } from "./modal-categoria/modal-categoria.service";

@NgModule({
  declarations:[
    ListaCategoriaComponent,
    ModalCategoriaComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ErroMsgModule,
    CategoriaRoutingModule
  ],
  exports:[],
  providers:[
    CategoriaService,
    ModalCategoriaService,
    BsModalService
  ]
})
export class CategoriaModule { }
