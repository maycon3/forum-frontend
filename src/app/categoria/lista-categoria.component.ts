import { Component, OnDestroy, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { Categoria } from "./categoria";
import { CategoriaService } from "./categoria.service";
import { ModalCategoriaService } from "./modal-categoria/modal-categoria.service";

@Component({
  selector: 'app-lista-categoria',
  templateUrl:'./lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit, OnDestroy {

  categorias$ = new Observable<Categoria[]>();
  inscricao: Subscription;

  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService
  ) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.getAll();
    this.atualizaLista();
  }

  abreModal(categoria?: Categoria): void {
    this.modalService.open(categoria);
  }

  private atualizaLista(): void {
    this.inscricao = this.modalService.getResultado()
    .subscribe(() => {
      this.categorias$ = this.categoriaService.getAll();
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
