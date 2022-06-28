import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

const KEY ='credenciais';

@Injectable()
export class CredenciaisService {

  private testeSbject = new BehaviorSubject<boolean|null>(null);

  setTesteHead(teste: boolean): void {
    this.testeSbject.next(teste);
  }

  getTesteHead(): Observable<boolean|null> {
    return this.testeSbject.asObservable();
  }
}
