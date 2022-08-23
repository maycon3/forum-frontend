import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { DialogService } from "../shared/components/modal/modalDialog/dialog.service";

import { Categoria } from "./interfaces/categoria";
import { CategoriaService } from "./services/categoria.service";
import { ModalCategoriaComponent } from "./modal-categoria/modal-categoria.component";

@Component({
  selector: 'app-lista-categoria',
  templateUrl:'./lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = [];
  temMais: boolean;
  totalPaginas = 0;
  page = 0;
  contador = 0;
  inscricao: Subscription;

  constructor(
    private categoriaService: CategoriaService,
    private dialog: DialogService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.buscaListagem();
  }

  open(categoria?: Categoria): void {
    const dialogRef = this.dialog
      .open(
        ModalCategoriaComponent,
        'overlay-panel__modal-curso',
        {data: categoria});
    dialogRef.afterClosed()
      .subscribe(() => {
        this.buscaListagem();
      });
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

  private buscaListagem(): void {
    this.categoriaService.getPage(this.page)
      .subscribe(res => {
        this.categorias = res.content;
        this.totalPaginas = res.totalElements;
        this.page = res.number;
        this.temMais = true;
      });
  }

}
