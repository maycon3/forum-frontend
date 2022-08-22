import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CategoriaService } from '../categoria.service';
import { Categoria } from "../categoria";
import { DialogRef } from 'src/app/shared/components/modal/modalDialog/dialog-ref';
import { DIALOG_DATA } from 'src/app/shared/components/modal/modalDialog/dialog-token';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls:['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {

  categoriaForm: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: any,
    ) { }

  ngOnInit(): void {
    this.createForm();
    const categoria = this.data.data as Categoria;
    if(categoria != undefined) {
      this.populaCategoria(categoria);
    }
  }

  salvar(): void {
    if(this.categoriaForm.valid) {
      const categoria = this.categoriaForm.getRawValue() as Categoria;
      this.categoriaService.post(categoria)
        .subscribe(() => {
          this.close();
        });
    }
  }

  close(): void {
    this.dialogRef.close();
  }

  private createForm(): void {
    this.categoriaForm = this.fb.group({
      id: [null],
      nome: [null, [Validators.required]]
    });
  }

  private populaCategoria(dados: Categoria) {
    this.categoriaForm.patchValue({...dados});
  }


}
