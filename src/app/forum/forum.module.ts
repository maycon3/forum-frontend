import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HomeRoutingModule } from "./forum-routing.module";
import { ForumComponent } from "./forum.component";
import { HomeService } from "./home.service";
import { TopicoModule } from "./topico/topico.module";

@NgModule({
  declarations: [ForumComponent],
  imports: [
    CommonModule,
    TopicoModule,
    HomeRoutingModule
  ],
  providers:[HomeService]
})
export class ForumModule { }
