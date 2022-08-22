import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {PaginatorModule} from 'primeng/paginator';
import { ErroMsgModule } from "../shared/components/erro-msg/erro-msg.module";
import { LoadButtonModule } from "../shared/components/load-button/load-button.module";
import { ModalModule } from "../shared/components/modal/modal.module";

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
    ErroMsgModule,
    LoadButtonModule,
    PaginatorModule,
    ModalModule,
    CategoriaRoutingModule
  ],
  exports:[],
  providers:[
    CategoriaService,
    ModalCategoriaService,
    ListaCategoriaResolver
  ]
})
export class CategoriaModule { }
