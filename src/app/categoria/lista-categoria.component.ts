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

  categorias: Categoria[] = [];
  temMais: boolean;
  totalPaginas = 0;
  page = 0;
  contador = 0;
  inscricao: Subscription;

  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buscaListagem();
    this.atualizaLista();
  }

  abreModal(categoria?: Categoria): void {
    this.modalService.open(categoria);
  }

  maisCategorias(): void {
    this.categoriaService.getPage(++this.contador)
      .subscribe(res => {
        this.categorias = this.categorias.concat(res.content);
        if(!res.content.length) {
          this.temMais = false;
        }
      });
  }

  paginate(event: any): void {
    this.page = event.page;
    this.buscaListagem();
  }

  private atualizaLista(): void {
    this.inscricao = this.modalService.getResultado()
    .subscribe(() => {
      this.buscaListagem();
    });
  }

  private buscaListagem(): void {
    this.categoriaService.getPage(this.page)
      .subscribe(res => {
        this.categorias = res.content;
        this.totalPaginas = res.totalElements;
        this.page = res.number;
        this.temMais = true;
      });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
