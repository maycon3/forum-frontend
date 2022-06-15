import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaginationModule } from 'ngx-bootstrap/pagination';

import { PaginatorComponent } from "./paginator.component";

@NgModule({
  declarations:[PaginatorComponent],
  imports: [CommonModule,PaginationModule.forRoot()],
  exports: [PaginatorComponent]
})
export class PaginatorModule { }
