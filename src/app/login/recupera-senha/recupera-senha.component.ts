import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { RecuperaSenhaService } from "./recupera-senha.service";

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.component.html',
  styleUrls: ['./recupera-senha.component.css']
})
export class RecuperaSenhaComponent implements OnInit {

  display$: Observable<'open' | 'close'>;

  constructor(
    private recuperaSenhaService: RecuperaSenhaService
  ) {}

  ngOnInit(): void {
    this.display$ = this.recuperaSenhaService.watch();
    this.display$.subscribe(x => console.log(x))
  }

  close(): void {
    this.recuperaSenhaService.close();
  }

}
