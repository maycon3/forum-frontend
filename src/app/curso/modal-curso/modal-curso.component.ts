import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DialogRef } from "src/app/core/modalDialog/dialog-ref";
import { DIALOG_DATA } from "src/app/core/modalDialog/dialog-token";
import { Curso } from "../curso";

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {

  modalCursoForm: FormGroup;

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    const curso = this.data as Curso;
    if(curso != undefined || curso != null) {
      this.populaCurso(curso);
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

}
