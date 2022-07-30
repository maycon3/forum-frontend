import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { Observable } from "rxjs";
import { BaseFormComponent } from "src/app/shared/directives/base-form/base-form.component";
import { ForGotService } from "./forgot.service";
import { RecuperaSenhaService } from "./recupera-senha.service";

@Component({
  selector: 'app-recupera-senha',
  templateUrl: './recupera-senha.component.html',
  styleUrls: ['./recupera-senha.component.css']
})
export class RecuperaSenhaComponent implements OnInit {
  recuperaForm: FormGroup;
  display$: Observable<'open' | 'close'>;

  constructor(
    private recuperaSenhaService: RecuperaSenhaService,
    private forgotService: ForGotService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.display$ = this.recuperaSenhaService.watch();
  }

  close(): void {
    this.recuperaSenhaService.close();
  }

  recuperarSenha(): void {
    const email = this.recuperaForm.getRawValue() as string;
    this.forgotService.forgot(email)
      .subscribe(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Recuperação' ,
          detail: 'Recuperação realizado com sucesso.'
        });
      });
    this.close();
    this.limpaCampo();
  }

  private createForm(): void {
    this.recuperaForm = this.fb.group({
      email : [null, [Validators.required, Validators.email]]
    })
  }

  private limpaCampo(): void {
    this.recuperaForm.reset();
  }

}
