import { Categoria } from "../categoria";

export interface Incializador {
  watch: 'open' | 'close';
  categoria: Categoria;
}
