import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from "rxjs";

import { Categoria } from "src/app/categoria/categoria";
import { CategoriaService } from "src/app/categoria/categoria.service";
import { BaseFormComponent } from "src/app/shared/directives/base-form/base-form.component";
import { CursoService } from "../../curso.service";
import { Curso } from "./curso";

@Component({
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent extends BaseFormComponent implements OnInit {

  categorias: Categoria[] = [];
  resultado: Subject<void>;

  constructor(
    private modalService: BsModalService,
    private categoriaService: CategoriaService,
    private cursoService: CursoService,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.resultado = new Subject<void>();
    this.createForm();
    this.categoriaService.getAll()
    .subscribe(resListaCat =>{
      this.categorias = resListaCat;
    });
    this.buscaCursoParaAtualizar();
  }

  close(): void {
    this.modalService.hide();
  }

  salvar(): void {
    const id = this.formulario.get('id')?.value;
    if(this.formulario.valid) {
      const curso = this.formulario.getRawValue() as Curso;
      this.cursoService.post(curso).subscribe(()=> {
          this.resultado.next();
          this.close();
      });
    }else {
      this.verficaValidacoesForms(this.formulario);
    }
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      id: [null],
      nomeCurso:[null,[Validators.required]],
      categoriaId: ['',[Validators.required]]
    });
  }

  private populaCurso(dados:Curso): void {
    this.formulario.patchValue({...dados});
  }

  private buscaCursoParaAtualizar(): void {
    const id = this.modalService.config.initialState as unknown as number;
    if(id) {
        this.cursoService.get(id)
        .subscribe(resCurso => {
          this.populaCurso(resCurso);
        });
    }
  }

}
