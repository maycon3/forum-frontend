import { OverlayRef } from "@angular/cdk/overlay";
import { Observable, Subject } from "rxjs";

export class DialogRef {

  private afterClosedSubject = new Subject();

  constructor(private overlayRef: OverlayRef) { }

  /**
   *Fecha a sobreposição. Opcionalmente, você pode fornecer um resultado.
   */
  public close(result?: any) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result);
    this.afterClosedSubject.complete();
  }

  /**
   * Um observável que notifica quando a sobreposição foi fechada
   */
  public afterClosed(): Observable<any> {
    return this.afterClosedSubject.asObservable();
  }

}
