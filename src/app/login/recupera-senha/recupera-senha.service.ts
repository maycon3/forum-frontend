import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class RecuperaSenhaService {

  private display: BehaviorSubject<'open' | 'close'> =
                   new BehaviorSubject<'open' | 'close'>('open');


  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  open(): void {
    this.display.next('open');
  }

  close(): void {
    this.display.next('close');
  }
}
