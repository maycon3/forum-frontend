import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForumComponent } from "./forum.component";
import { ListaTopicoComponent } from "./topico/lista-topico/lista-topico.component";

const routes: Routes = [
  { path: 'todos', component: ForumComponent },
  { path: 'sem-resposta', component: ListaTopicoComponent },
  { path: ':catStatus/:status', component: ListaTopicoComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
