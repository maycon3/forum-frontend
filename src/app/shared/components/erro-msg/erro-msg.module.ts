import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ErroMsgComponent } from "./erro-msg.component";

@NgModule({
  declarations:[ErroMsgComponent],
  imports:[
    CommonModule
  ],
  exports:[ErroMsgComponent]
})
export class ErroMsgModule { }
