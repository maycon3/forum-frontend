import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForumComponent } from "./forum.component";
import { ListaTopicoComponent } from "./topico/lista-topico/lista-topico.component";

const routes: Routes = [
  { path: 'todos', component: ForumComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
