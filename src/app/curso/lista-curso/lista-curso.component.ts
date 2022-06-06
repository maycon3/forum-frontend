import { Component, OnInit } from "@angular/core";
import { CursoService } from "../curso.service";

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursoService.getAll()
      .subscribe(resCurso =>{
        console.log('lista de Curso: ', resCurso)
    });
  }

}
