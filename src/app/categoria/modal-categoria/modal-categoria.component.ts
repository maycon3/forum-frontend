import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

import { CategoriaService } from '../categoria.service';
import { Incializador } from './inicializador';
import { Categoria } from "../categoria";
import { ModalCategoriaService } from './modal-categoria.service';

@Component({
  selector: 'app-modal-categoria',
  templateUrl: './modal-categoria.component.html',
  styleUrls:['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {

  resultado: Subject<void>;
  display$: Observable<Incializador | null>;
  categoriaForm: FormGroup;

  constructor(
    private categoriaService: CategoriaService,
    private modalService: ModalCategoriaService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.display$ = this.modalService.watch();
    this.editaCategoria();
    this.resultado = new Subject<void>();
  }

  salvar(): void {
    if(this.categoriaForm.valid) {
      const categoria = this.categoriaForm.getRawValue() as Categoria;
      this.categoriaService.post(categoria)
        .subscribe(() => {
          this.modalService.setResultado();
          this.limpaCampo();
          this.close();
        });
    }
  }

  close(): void {
    this.limpaCampo();
    this.modalService.close();
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

  private limpaCampo(): void {
    this.categoriaForm.reset();
  }

  private editaCategoria(): void {
    this.modalService.watch()
      .subscribe(inicial => this.populaCategoria(inicial.categoria));
  }
}
