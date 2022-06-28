import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable()
export class AlertService {

  alertSubject = new Subject<Alert|null>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.keepAfterRouteChange = false;
      }else {
        this.clear();
      }
    })
  }

  success(mensagem: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.SUCCESS,mensagem,keepAfterRouteChange);
  }

  danger(mensagem: string, keepAfterRouteChange: boolean = false): void {
    this.alert(AlertType.DANGER, mensagem, keepAfterRouteChange);
  }

  getAlert(): Observable<Alert|null> {
    return this.alertSubject.asObservable();
  }

  private alert(alertType:AlertType, mensagem: string, keepAfterRouteChange: boolean): void{
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType,mensagem));
  }

  private clear(): void {
    this.alertSubject.next(null);
  }

}
