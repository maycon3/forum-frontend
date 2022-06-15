import { Injectable } from "@angular/core";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Observable } from "rxjs";
import { ModalCursoComponent } from "./modal-curso.component";

@Injectable()
export class ModalCursoService {

  constructor(private modalService: BsModalService) { }

  abreModalCurso(id?: number):Observable<void> {
    let initialState: any;
    if(id) {
      initialState = id;
    }
    const bsModalRef: BsModalRef = this.modalService
      .show(ModalCursoComponent,
        {
          initialState,
          class: 'modal-lg',
          backdrop: true,
          ignoreBackdropClick: true
        }
      );
      return bsModalRef.content.resultado;
  }

}
