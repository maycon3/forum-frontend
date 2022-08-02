import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Categoria } from "../categoria";
import { Incializador } from "./inicializador";


@Injectable()
export class ModalCategoriaService {

  private inicial: Incializador = { watch: 'close'} as Incializador;
  private display$: BehaviorSubject<Incializador> =
        new BehaviorSubject<Incializador>(this.inicial);
  private resultado = new Subject<void>();

  watch(): Observable<Incializador> {
    return this.display$.asObservable();
  }

  close(): void {
    this.inicial.watch = 'close';
    this.display$.next(this.inicial);
  }

  open(categoria?: Categoria): void {
    this.inicial.watch = 'open';
    if(categoria !== undefined) {
      this.inicial.categoria = categoria;
    }
    this.display$.next(this.inicial);
  }

  setResultado(): void {
    this.resultado.next();
  }

  getResultado(): Observable<void> {
    return this.resultado.asObservable();
  }
}
