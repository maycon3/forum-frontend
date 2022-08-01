import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { Subject } from 'rxjs';

import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria';

@Component({
  templateUrl: './modal-categoria.component.html',
  styleUrls:['./modal-categoria.component.css']
})
export class ModalCategoriaComponent implements OnInit {

  resultado: Subject<void>;

  constructor(
    private categoriaService: CategoriaService
    ) { }

  ngOnInit(): void {
    this.resultado = new Subject<void>();

  }

}
