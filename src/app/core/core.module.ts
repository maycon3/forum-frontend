import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ApiService } from "./services/api.service";
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    NgxSpinnerModule
  ],
  exports: [HeaderComponent,NgxSpinnerModule],
  providers: [ApiService]
})
export class CoreModule { }
