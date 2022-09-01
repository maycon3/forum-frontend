export interface Home {
  id: number;
  nome: string;
  cursos: Curso[];
  topico: number;
  resposta: number;
  collapse: boolean;
  icone: boolean;
}

export interface Curso {
  id: number;
  nomeCurso: string;
  categoria: string;
}
