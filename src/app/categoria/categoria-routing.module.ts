import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditaCategoriaComponent } from "./edita-categoria/edita-categoria.component";
import { ListaCategoriaComponent } from "./lista-categoria.component";

const routes: Routes = [
  {path:'', component: ListaCategoriaComponent},
  {path:'cadastrar', component:EditaCategoriaComponent},
  {path:'edita/:id', component: EditaCategoriaComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class CategoriaRoutingModule { }
