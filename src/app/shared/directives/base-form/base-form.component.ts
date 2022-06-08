import { Directive } from "@angular/core";
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

@Directive()
export abstract class BaseFormComponent {

  formulario: FormGroup;

  verficaValidacoesForms(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsDirty();
      controle?.markAsTouched();
    });
  }

  converteParaFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
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
