import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Categoria } from "./categoria";
import { CategoriaService } from "./categoria.service";
import { Incializador } from "./modal-categoria/inicializador";
import { ModalCategoriaService } from "./modal-categoria/modal-categoria.service";

@Component({
  selector: 'app-lista-categoria',
  templateUrl:'./lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias$ = new Observable<Categoria[]>();


  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService
  ) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.getAll();
    this.modalService.getResultado()
      .subscribe(() => {
        this.categorias$ = this.categoriaService.getAll();
      });
  }

  abreModal(categoria?: Categoria): void {
    this.modalService.open(categoria);
  }


}
