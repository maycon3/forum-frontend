export interface ListaCategoria {
  id: number;
  categoria: string;
  cursos: ListaCurso[];
  totalTopicos: number;
  semResposta: number;
}


export interface ListaCurso {
  id: number;
  nomeCurso: string;
}
