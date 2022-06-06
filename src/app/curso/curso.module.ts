import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RoutingCursoModule } from "./routing-curso.module";
import { CursoService } from "./curso.service";
import { ListaCursoComponent } from "./lista-curso/lista-curso.component";

@NgModule({
  declarations: [ListaCursoComponent],
  imports:[CommonModule, RoutingCursoModule],
  providers:[CursoService]
})
export class CursoModule { }
