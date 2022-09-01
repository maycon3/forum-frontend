import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeRoutingModule } from "./forum-routing.module";
import { ForumComponent } from "./forum.component";
import { HomeService } from "./home.service";
import { TopicoModule } from "./topico/topico.module";

@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    TopicoModule,
    FontAwesomeModule,
    HomeRoutingModule
  ],
  providers:[HomeService]
})
export class ForumModule { }
