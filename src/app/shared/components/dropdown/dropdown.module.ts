import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";

import { DropdownComponent } from "./dropdown.component";
import { DropdownTriggerForDirective } from "./dropdown-trigger-for.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations:[DropdownComponent,DropdownTriggerForDirective],
  imports:[CommonModule,FormsModule, OverlayModule],
  exports:[DropdownComponent,DropdownTriggerForDirective]
})
export class DropdownModule { }
