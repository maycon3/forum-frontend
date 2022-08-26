import { Page } from "src/app/shared/interfaces/paginacao";
import { Curso } from "../interfaces/curso";

export class CursoTest{
  cursoUrl ='/cursos';

  getPageTest(): Page<Curso[]> {
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
    const cursoPage = buildPageCurso();
    cursoPage.content = cursos;
    return cursoPage;
  }

}


function buildPageCurso(): Page<Curso[]> {
  const page = {
    pageable:{
      sort: {
        empty:false,
        sorted:true,
        unsorted: false
      },
      offset: 0,
      pageNumber: 0,
      pageSize: 10,
      unpaged: false,
      paged: true
    },
    last: false,
    totalElements: 11,
    totalPages: 2,
    size: 10,
    number: 0,
    sort: {
      empty: false,
      sorted: true,
      unsorted: false
    },
    first: true,
    numberOfElements: 10,
    empty: false
  } as Page<Curso[]>;

  return page;
}
