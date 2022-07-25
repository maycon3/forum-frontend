import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';

import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';
import { BaseFormComponent } from 'src/app/shared/directives/base-form/base-form.component';

@Component({
  templateUrl: './modal-categoria.component.html',
  styleUrls:['./modal-categoria.component.css']
})
export class ModalCategoriaComponent extends BaseFormComponent implements OnInit {

  resultado: Subject<void>;

  constructor(
    private bsModalService: BsModalService,
    private categoriaService: CategoriaService,
     private fb: UntypedFormBuilder
    ) {
      super();
    }

  ngOnInit(): void {
    this.resultado = new Subject<void>();
    this.createForm();
    const id = this.bsModalService.config.initialState  as unknown as number;
    if(id) {
      this.categoriaService.get(id)
      .subscribe(resCat =>{
          this.populaCategoria(resCat);
      });
    }
  }

  close(): void {
    this.bsModalService.hide();
  }

  salvaCategoria(): void {
    if(this.formulario.valid){
      const categoria = this.formulario.getRawValue() as Categoria;
      this.categoriaService.post(categoria)
        .subscribe(()=> {
          this.resultado.next();
          this.close();
        })
    }else {
      this.verficaValidacoesForms(this.formulario);
    }
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      id: [null],
      nome: [null,[Validators.required]]
    });
  }

  private populaCategoria(dados: Categoria): void {
    this.formulario.patchValue({...dados});
  }

}
