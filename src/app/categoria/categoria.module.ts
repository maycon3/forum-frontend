import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BsModalService } from "ngx-bootstrap/modal";
import { ModalModule } from 'ngx-bootstrap/modal';
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoadButtonModule } from "../shared/components/load-button/load-button.module";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { CategoriaService } from "./categoria.service";
import { ListaCategoriaComponent } from "./lista-categoria.component";
import { ListaCategoriaResolver } from "./lista-categoria.resolver";
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
    LoadButtonModule,
    CategoriaRoutingModule
  ],
  exports:[],
  providers:[
    CategoriaService,
    ModalCategoriaService,
    BsModalService,
    ListaCategoriaResolver
  ]
})
export class CategoriaModule { }
