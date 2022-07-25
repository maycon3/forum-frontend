import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { NgxSpinnerService } from "ngx-spinner";
import { TokenService } from "../token/token.service";
import { UserService } from "../user/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 nome: string|null = '';

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
     this.userService.getUser().subscribe(res =>this.nome = res);
   }

   logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
   }

   estaLogado(): boolean {
    return this.tokenService.hasToken();
  }

}
