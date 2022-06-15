import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoResolve } from "./lista-curso/curso.resolve";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";

const routes:Routes = [
  {
    path:'',
    component: ListaCursoComponent,
    resolve: {
      curso: CursoResolve
    }
  }
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RoutingCursoModule { }
