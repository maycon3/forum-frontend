import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { NgxSpinnerService } from "ngx-spinner";

import { AuthService } from "src/app/core/auth/auth.service";
import { BaseFormComponent } from "src/app/shared/directives/base-form/base-form.component";
import { Credencias } from "./credencias";

@Component({
  selector: 'app-signin',
  templateUrl:'./signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent extends BaseFormComponent implements OnInit {

  constructor(
    private fb: UntypedFormBuilder,
    private authService: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService
  ){
    super();
  }

  ngOnInit(): void {
    this.createForm();
  }

  logar(): void {
    this.spinner.show();
    if(this.formulario.valid){
      const credencias = this.formulario.getRawValue() as Credencias;
      this.authService.authenticate(credencias)
        .subscribe(() => {
         this.router.navigate(['/forum','todos']);
        });
    }
  }

  private createForm(): void {
    this.formulario = this.fb.group({
      email:[null,[Validators.required]],
      senha:[null,[Validators.required]]
    });
  }

}
