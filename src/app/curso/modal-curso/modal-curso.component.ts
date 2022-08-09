import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoriaService } from "src/app/categoria/categoria.service";

import { DialogRef } from "src/app/core/modalDialog/dialog-ref";
import { DIALOG_DATA } from "src/app/core/modalDialog/dialog-token";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {

  modalCursoForm: FormGroup;
  categorias$ = this.categoriaService.getAll();

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.createForm();
    const curso = this.data as Curso;
    if(curso != undefined || curso != null) {
      this.populaCurso(curso);
    }
  }

  salva(): void {
    if(this.modalCursoForm.valid) {
      const curso = this.modalCursoForm.getRawValue() as Curso;
      this.cursoService.salva(curso)
        .subscribe(() => {
          this.limpaCampo();
          this.close();
        });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  private createForm(): void {
    this.modalCursoForm = this.fb.group({
      id: [null],
      categoriaId: ['', Validators.required],
      nomeCurso: [null, [Validators.required]]
    });
  }

  private populaCurso(dados: Curso): void {
    this.modalCursoForm.patchValue({...dados});
  }

  private limpaCampo(): void {
    this.modalCursoForm.reset();
  }
}
