import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Categoria } from "./categoria";
import { CategoriaService } from "./categoria.service";
import { ModalCategoriaService } from "./modal-categoria/modal-categoria.service";

@Component({
  selector: 'app-lista-categoria',
  templateUrl:'./lista-categoria.component.html'
})
export class ListaCategoriaComponent implements OnInit {

  listaCategoria$ = new Observable<Categoria[]>();

  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService
  ) {}

  ngOnInit(): void {
    this.listaCategoria$ = this.categoriaService.getAll();
  }

  salvaCategoria(id?:number): void {
      this.modalService.abreModal(id)
        .subscribe(()=> {
          this.listaCategoria$ = this.categoriaService.getAll();
        })
  }

}
