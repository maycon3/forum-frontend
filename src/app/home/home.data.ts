import { Home } from "./home";


export class HomeData {

  static homes: Home[] = [
    {
      id:1,
      nome:'Programação',
      cursos:[
        {
          id:1,
          nomeCurso:'java',
          categoria: 'Programação'
        },
        {
          id:2,
          nomeCurso: 'java API',
          categoria: 'Programação'
        }
      ],
      topico:10023,
      resposta: 1000
    },
  ]
}
