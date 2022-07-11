export interface Home {
  id: number;
  nome: string;
  cursos: Curso[];
  topico: number;
  resposta: number;
}

export interface Curso {
  id: number;
  nomeCurso: string;
  categoria: string;
}
