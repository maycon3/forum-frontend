import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ListaCategoriaComponent } from "./lista-categoria.component";
import { ListaCategoriaResolver } from "./lista-categoria.resolver";

const routes: Routes = [
  {
    path:'', component: ListaCategoriaComponent,
    resolve:{
      categorias: ListaCategoriaResolver
    }
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CategoriaRoutingModule { }
