import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
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

  categorias: Categoria[];
  inscricao: Subscription;

  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categorias = this.route.snapshot.data['categorias'];
    this.atualizaLista();
  }

  abreModal(categoria?: Categoria): void {
    this.modalService.open(categoria);
  }

  private atualizaLista(): void {
    this.inscricao = this.modalService.getResultado()
    .subscribe(() => {
      this.getCatagorias();
    });
  }

  private getCatagorias(): void {
    this.categoriaService.getAll()
      .subscribe(res => this.categorias = res);
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
