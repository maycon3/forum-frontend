import { Component, OnInit } from "@angular/core";
import { DialogService } from "src/app/shared/components/modal/modalDialog/dialog.service";
import { Curso } from "../interfaces/curso";
import { CursoService } from "../services/curso.service";
import { ModalCursoComponent } from "../modal-curso/modal-curso.component";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  cursos: Curso[] = [];
  contador = 0;
  temMais: boolean;
  page = 0;
  totalPaginas = 0;

  constructor(
    private dialog: DialogService,
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.buscaListagem();
  }

  open(curso?: Curso): void {
    const dialogRef = this.dialog.open(ModalCursoComponent,'overlay-panel__modal-curso',{data: curso});
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

  paginate(event: any): void {
    this.page = event.page;
    this.buscaListagem();
  }

  private buscaListagem(): void {
    this.cursoService.getPage(this.page).subscribe(res =>{
      this.cursos = res.content;
      this.totalPaginas = res.totalElements;
      this.page = res.number;
      this.temMais = true;
    });
  }

}
