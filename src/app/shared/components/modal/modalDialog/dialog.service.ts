import { Injectable, Injector } from "@angular/core";
import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from "@angular/cdk/portal";
import { DialogRef } from "./dialog-ref";
import { DIALOG_DATA } from "./dialog-token";

export interface DialogConfig {
  data?: any;
}

@Injectable()
export class DialogService {

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  open<T>(component: ComponentType<T>, config?: DialogConfig) {
    // Estrategia de posição globalmente centrada
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically()

    // Crie a sobreposição com opções personalizadas
    const overlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel'
    });

    // Criar dialogRef para retornar
    const dialogRef = new DialogRef(overlayRef);

    const injector = Injector.create({
      parent: this.injector,
      providers: [
        {provide: DialogRef, useValue: dialogRef},
        {provide: DIALOG_DATA, useValue: config}
      ]
    });

    // Anexar portal de componentes a sobreposição
    const portal = new ComponentPortal(component, null, injector);
    overlayRef.attach(portal);

    return dialogRef;
  }
}
