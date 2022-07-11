import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TopicoFiltroComponent } from "./topico-filtro/topico-filtro.component";
import { RouterModule } from "@angular/router";
import { ListaTopicoComponent } from "./lista-topico/lista-topico.component";

@NgModule({
  declarations: [TopicoFiltroComponent,ListaTopicoComponent],
  imports:[
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[TopicoFiltroComponent],
  providers:[]
})
export class TopicoModule { }
