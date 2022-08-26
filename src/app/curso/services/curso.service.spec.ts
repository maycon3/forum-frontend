import { CursoService } from "./curso.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { AppModule } from "src/app/app.module";
import { CursoTest } from "../test/curso-test";
import { Curso } from "../interfaces/curso";

describe(CursoService.name, () => {

  let controller: HttpTestingController;
  let service: CursoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule, HttpClientTestingModule],
      providers: [CursoService]
    }).compileComponents();

    service = TestBed.inject(CursoService);
    controller = TestBed.inject(HttpTestingController);
  });

  it(`Criação do serviço`, () => {
    expect(service).toBeTruthy();
  });

  it(`#${CursoService.prototype.getPage.name} deve
      retorna os dados paginados de curso`, done => {
        const cursoTest = new CursoTest();
        const cursos: Curso[] = [
          {
            id: 1,
            nomeCurso: 'java',
            categoriaId: 1,
            categoria: 'Programação'
          },
          {
            id: 2,
            nomeCurso: 'Angular',
            categoriaId: 2,
            categoria: 'Frontend'
          },
          {
            id: 3,
            nomeCurso: 'Clound',
            categoriaId: 3,
            categoria: 'Devops'
          }
        ];
        service.getPage(0).subscribe(data => {
          expect(data.content).toEqual(cursos);
          done();
        });
        controller.expectOne('http://localhost:8080/cursos?page=0')
          .flush(cursoTest.getPageTest());
  });
})
