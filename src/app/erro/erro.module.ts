import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ErroComponent } from "./erro.component";
import { ErroRoutingModule } from "./erro-routing.module";

@NgModule({
  declarations: [ErroComponent],
  imports: [CommonModule, ErroRoutingModule]
})
export class ErroModule { }
