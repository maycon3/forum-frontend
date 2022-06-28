import { CommonModule } from "@angular/common";

import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert.component";
import { AlertService } from "./alert.service";

@NgModule({
  declarations:[AlertComponent],
  imports:[CommonModule],
  exports:[AlertComponent],
  providers: [AlertService]
})
export class AlertModule { }
