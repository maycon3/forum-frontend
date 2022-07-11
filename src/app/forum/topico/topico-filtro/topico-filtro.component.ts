import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription, tap } from "rxjs";

import { Categoria } from "src/app/categoria/categoria";
import { CategoriaService } from "src/app/categoria/categoria.service";
import { CursoService } from "src/app/curso/curso.service";
import { CursoPage } from "src/app/curso/lista-curso/modal-curso/curso";
import { BaseFormComponent } from "src/app/shared/directives/base-form/base-form.component";
import { TipoRota } from "./tipo-rota";

@Component({
  selector: 'app-topico-filtro',
  templateUrl: './topico-filtro.component.html',
  styleUrls: ['./topico-filtro.component.css']
})
export class TopicoFiltroComponent extends
        BaseFormComponent implements OnInit, OnDestroy {

  $categorias = this.categoriaService.getAll();
  cursos: CursoPage[] = [];
  inscricoes: Subscription;
  private catStatus = '';
  private rota = 'todos';

  constructor(
    private categoriaService: CategoriaService,
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.route.params.subscribe((params: any) => {
      if (params.catStatus) {
        this.catStatus = params.catStatus;
        this.setCategoria(this.catStatus.substring(10));
      }
    });

  }

  categoriaSelecionada(cat:string): void {
    this.router.navigate(['/forum', `categoria-${cat}`, `${this.rota}`]);
  }

  navegaTodos(): void {
    this.rota = TipoRota.TODOS;
    if (this.catStatus) {
      this.router.navigate(['/forum', this.catStatus,TipoRota.TODOS]);
      return;
    }
    this.router.navigate(['/forum/todos']);
  }

  navegaSemResposta(): void {
    this.rota = TipoRota.SEMRESPOSTA;
    if (this.catStatus) {
      this.router.navigate(['/forum', this.catStatus,TipoRota.SEMRESPOSTA]);
      return;
    }
    this.router.navigate([`/forum/sem-resposta`]);
  }

  isActive(rota: string): any {
    switch (rota) {
      case TipoRota.SEMRESPOSTA:
        return this.router.url.includes('/forum/sem-resposta') ||
        this.router.url.includes(`/forum/${this.catStatus}/sem-resposta`)
      case TipoRota.TODOS:
        return this.router.url.includes('/forum/todos')||
        this.router.url.includes(`/forum/${this.catStatus}/todos`)
      case TipoRota.SOLUCIONADOS:
        return this.router.url.includes('/forum/solucionados');
    }
  }

  getCategoriaEnumValue(categoria: string): string {
    return categoria.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/ /g,'').toLowerCase();
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      itemCategoria: ['']
    })
  }

  private setCategoria(dados: string): void {
    this.formulario.get('itemCategoria')?.setValue(dados);
  }




  ngOnDestroy(): void {
    //this.inscricoes.unsubscribe();
  }

}
