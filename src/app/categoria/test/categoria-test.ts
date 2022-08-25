import { Page } from "src/app/shared/interfaces/paginacao";
import { Categoria } from "../interfaces/categoria";

export class CategoriaTest {

  apiLista = 'http://localhost:8080/categorias/lista';
  apiCategoria= 'http://localhost:8080/categorias/1';

  private lista = [
    {
      id:1,
      nome: 'Programação'
    },
    {
      id:2,
      nome: 'Frontend'
    }
  ];

  getCategoriaLista(): Categoria[] {
    return this.lista;
  }

  getCategoria():Categoria{
    let categoria = {} as Categoria;
    categoria = this.lista.find(cat => cat.id == 1) as Categoria;
    return categoria;
  }

  getPageListaVaiza(): Page<Categoria[]> {
    const pageCategoria = buildCategoriaLista();
    pageCategoria.content = [];
    return pageCategoria;
  }
}


export function buildCategoriaLista(): Page<Categoria[]>{
  const categorias: Categoria[] = [];
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
  } as Page<Categoria[]>;

  for (let i = 0; i < 8; i++) {
    categorias.push({
        id: i +1,
         nome: ''
        });
  }
  page.content = categorias;
  return page;
}
