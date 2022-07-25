import { Component, OnInit } from '@angular/core';
import { CredenciaisService } from './core/services/credenciais.service';
import { TokenService } from './core/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forum';

  constructor() {}

  ngOnInit(): void {
  }

}
