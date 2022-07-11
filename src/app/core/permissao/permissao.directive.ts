import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

import { TipoPerfil } from "../user/permissao";
import { UserService } from "../user/user.service";

@Directive({
  selector: '[permissao]'
})
export class PermissaoDirective implements OnInit {

  constructor(
    private userService: UserService,
    private elemento: ElementRef<any>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    if(this.userService.temPerfil(TipoPerfil.USUARIO)) {
      this.renderer.setStyle(
        this.elemento.nativeElement,
        'display','none'
      );
    }
  }




}
