import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../user/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  isShow = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  toggle(): void {
    this.isShow = !this.isShow;
  }

  logout(): void {
    this.userService.logout();
    this.toggle();
    this.router.navigate(['/login'])
  }

  getNome(): string {
    return this.userService.getUsuario().nome + ' '+ this.userService.getUsuario().sobrenome;
  }
}
