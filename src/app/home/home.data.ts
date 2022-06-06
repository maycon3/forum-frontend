import { ListaCategoria } from "./modelo";

export class HomeData {

  static homes: ListaCategoria[] = [
    {
      id:1,
      categoria:'Programação',
      cursos:[
        {
          id:1,
          nomeCurso:'java'
        },
        {
          id:2,
          nomeCurso: 'java API'
        }
      ],
      semResposta: 240,
      totalTopicos:10023
    },
    {
      id:2,
      categoria:'Front-end',
      cursos:[
        {
          id:3,
          nomeCurso:'HTML e CSS'
        },
        {
          id:4,
          nomeCurso: 'Angular'
        },
        {
          id:5,
          nomeCurso: 'React'
        },
        {
          id:6,
          nomeCurso: 'Frameworks MVC'
        },
        {
          id:7,
          nomeCurso: 'Automação e Performance'
        },
        {
          id:8,
          nomeCurso: 'jQuery'
        }
      ],
      semResposta: 240,
      totalTopicos:10023
    }
  ]
}
