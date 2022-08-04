import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";

const routes:Routes = [
  {path:'', component: ListaCursoComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RoutingCursoModule { }
