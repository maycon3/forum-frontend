import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";

import { MessageService } from "primeng/api";

import { BaseFormComponent } from "src/app/shared/directives/base-form/base-form.component";
import { LoginService } from "../login.service";
import { NovoUsuario } from "./novo-usuario";

@Component({
  selector:'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private messageService: MessageService
  ){
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  criarUsuario(): void {
    if(this.formulario.valid){
      const usuario = this.formulario.getRawValue() as NovoUsuario;
      this.loginService.criarConta(usuario)
        .subscribe(() => {
          this.limpaCampos();
        },
        error =>{
        });
    }else {
      this.verficaValidacoesForms(this.formulario);
    }
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      nome: [null, [Validators.required]],
      sobreNome: [null, [Validators.required]],
      email: [null, [Validators.email,Validators.required]],
      senha:[null,[Validators.required]],
      perfilId: [2]
    });
  }

  private limpaCampos(): void {
    this.formulario.reset();
  }

}
