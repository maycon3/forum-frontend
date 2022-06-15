export interface Curso {
  id: number;
  nomeCurso: string;
  categoriaId: number;
}

export interface CursoPage {
  id: number;
  nomeCurso: string;
  categoria: string;
}

export interface Page {
  content: CursoPage[];
  pageable: Pageable;
  last: true;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: false;
  paged: true

}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
