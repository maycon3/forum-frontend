import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CategoriaRoutingModule } from "./categoria-routing.module";
import { EditaCategoriaComponent } from "./edita-categoria/edita-categoria.component";

@NgModule({
  declarations:[EditaCategoriaComponent],
  imports:[CommonModule,CategoriaRoutingModule],
  exports:[],
  providers:[]
})
export class CategoriaModule { }
