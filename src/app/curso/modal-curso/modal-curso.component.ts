import { Component, Inject, OnInit } from "@angular/core";
import { DialogRef } from "src/app/core/modalDialog/dialog-ref";
import { DIALOG_DATA } from "src/app/core/modalDialog/dialog-token";

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {

  constructor(
    private dialogRef: DialogRef,
    @Inject(DIALOG_DATA) private data: any
  ) { }

  ngOnInit(): void {
    const valor = this.data;
    console.log('Aparece ai valor: ', valor.data);
  }

  close(): void {
    this.dialogRef.close();
  }

}
