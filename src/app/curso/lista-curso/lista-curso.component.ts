import { Component, OnInit } from "@angular/core";
import { DialogService } from "src/app/shared/components/modal/modalDialog/dialog.service";
import { Curso } from "../curso";
import { CursoService } from "../curso.service";
import { ModalCursoComponent } from "../modal-curso/modal-curso.component";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  cursos: Curso[];
  contador = 0;
  temMais = true;
  readonly inicio = 0;

  constructor(
    private dialog: DialogService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.buscaListagem();
  }

  open(): void {
    const dialogRef = this.dialog.open(ModalCursoComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.buscaListagem();
    });
  }

  maisCursos(): void {
   this.cursoService.getPage(++this.contador)
      .subscribe(resp => {
        this.cursos = this.cursos.concat(resp.content);
        if(!resp.content.length) {
          this.temMais = false;
        }
      });
  }

  private buscaListagem(): void {
    this.cursoService.getPage(this.inicio).subscribe(res =>{
      this.cursos = res.content;
      this.temMais = true;
    });
  }

}
