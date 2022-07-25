import { Directive } from "@angular/core";
import { AbstractControl, UntypedFormControl, UntypedFormGroup } from "@angular/forms";

@Directive()
export abstract class BaseFormComponent {

  formulario: UntypedFormGroup;

  verficaValidacoesForms(formGroup: UntypedFormGroup): void {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
    });
  }

  converteParaFormControl(absCtrl: AbstractControl | null): UntypedFormControl {
    const ctrl = absCtrl as UntypedFormControl;
    return ctrl;
  }

  verficaCampo(campo: string): boolean | undefined {
    return (
      this.formulario.get(campo)?.hasError('required') &&
        (this.formulario.get(campo)?.touched || this.formulario.get(campo)?.dirty)
    );
  }

  aplicaCssDeErro(campo: string): any {
    return {
      'nao-valido': this.verficaCampo(campo)
    };
  }
}
