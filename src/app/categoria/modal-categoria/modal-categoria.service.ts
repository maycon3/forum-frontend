import { Injectable } from "@angular/core";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from "rxjs";
import { Categoria } from "../categoria";
import { ModalCategoriaComponent } from "./modal-categoria.component";

@Injectable()
export class ModalCategoriaService {

  constructor(private modalService: BsModalService) { }

  abreModal(id?: number): Observable<void> {
    let initialState: any;
    if(id) {
      initialState = id;
    }
    const bsModalRef: BsModalRef = this.modalService
      .show(ModalCategoriaComponent,
        {
          initialState,
          class: 'modal-lg',
          backdrop: false,
          ignoreBackdropClick: true
        }
      );
      return bsModalRef.content.resultado;
  }

}
