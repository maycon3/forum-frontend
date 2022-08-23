import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from "rxjs";

import { CategoriaService } from "src/app/categoria/services/categoria.service";

import { DialogRef } from "src/app/shared/components/modal/modalDialog/dialog-ref";
import { DIALOG_DATA } from "src/app/shared/components/modal/modalDialog/dialog-token";
import { Curso } from "../interfaces/curso";
import { CursoService } from "../services/curso.service";

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {

  modalCursoForm: FormGroup;
  categorias$ = this.categoriaService.getAll();
  private resultado = new Subject<void>();

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: any,
    private fb: FormBuilder,
    private categoriaService: CategoriaService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.createForm();
    const curso = this.data.data as Curso;
    if(curso != undefined) {
      this.populaCurso(curso);
      this.modalCursoForm.get('categoriaId')?.disable();
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
