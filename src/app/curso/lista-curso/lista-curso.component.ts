import { Component, OnInit } from "@angular/core";

import { tap } from "rxjs/operators";

import { NgxSpinnerService } from "ngx-spinner";
import { PageChangedEvent } from "ngx-bootstrap/pagination";

import { CursoService } from "../curso.service";
import { ModalCursoService } from "./modal-curso/modal-curso.service";
import { CursoPage, Page } from "./modal-curso/curso";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

 page: Page = {} as Page;
 cursos:CursoPage[] = [];
 ativo = true;

  constructor(
    private cursoService: CursoService,
    private modalService: ModalCursoService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.inicia();
  }

  paginacao(event: PageChangedEvent): void {
    let pagina = 0;
    if(event.page > 0) {
      pagina = event.page - 1;
    }
    this.cursoService.getPage(pagina)
      .subscribe(resPage => {
        this.page = resPage;
        this.cursos = this.page.content;
      })
  }

  abreModalCurso(id?: number): void {
    this.modalService.abreModalCurso(id)
      .subscribe(() => {
       this.IniciaPaginacao();
      });
  }

  private IniciaPaginacao(): void {
    this.cursoService.getPage(0)
    .pipe(tap(() => this.spinner.hide()))
    .subscribe(listPage => {
      this.page = listPage;
      this.cursos = this.page.content;
      this.temCursoNaLista();
    });
  }

  private temCursoNaLista(): void {
    this.ativo = this.cursos.length? true : false;
  }

  private inicia(): void {
    const page = this.route.snapshot.data['curso'] as Page;
    this.cursos = page.content;
    this.page = page;
    this.temCursoNaLista();
  }

}
