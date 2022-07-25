import { Component, Input } from "@angular/core";
import { FormGroup, UntypedFormControl } from "@angular/forms";

import { FormValidations } from "./form-validation";

@Component({
  selector: 'app-erro-msg',
  templateUrl: './erro-msg.component.html',
  styleUrls: ['./erro-msg.component.css']
})
export class ErroMsgComponent  {

  @Input() control: FormGroup;
  @Input() label: string;

  get erroMensagem(): FormValidations | null {
    for(const propriedadeNome in this.control.errors) {
      if(this.control.errors.hasOwnProperty(propriedadeNome) &&
           this.control.touched){
            return FormValidations.getErroMsg(
              this.label,
              propriedadeNome,
              this.control.errors[propriedadeNome]
            );
          }
        }
      return null;
      }
}
