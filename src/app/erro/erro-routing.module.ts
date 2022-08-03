import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErroComponent } from "./erro.component";

const routes: Routes = [
  {path: '', component: ErroComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErroRoutingModule { }
