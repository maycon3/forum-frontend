import { Component, OnInit } from "@angular/core";
import { DialogService } from "src/app/core/modalDialog/dialog.service";
import { ModalCursoComponent } from "../modal-curso/modal-curso.component";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
  }

  open() {
    const teste = 'Desenvolvedor Full Stack';
    const dialogRef = this.dialog.open(ModalCursoComponent,{data: teste});
    dialogRef.afterClosed().subscribe(() => {
      // Subscription runs after the dialog closes
      console.log('Dialog closed!');
    });
  }

}
