import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from '@angular/cdk/overlay';

import { DialogService } from "./modalDialog/dialog.service";

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers:[DialogService]
})
export class ModalModule { }
