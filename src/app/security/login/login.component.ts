import { Component } from '@angular/core';
import {Form, FormBuilder, Validators} from "@angular/forms";
import {AuthentificationService} from "../authentification.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {error} from "@angular/compiler-cli/src/transformers/util";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  processRunning = false;
  private formSubmitAttempt = false;

  private getFieldValue(name: string) {
    return this.form.get(name) == null ? '' : this.form.get(name)!.value;
  }

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthentificationService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  isFieldInvalid(field: string) {
    const control = this.form.get(field);

    return control == null ? false : (!control.valid && control.touched) || (control.untouched && this.formSubmitAttempt);
  }

  onSubmit() {
    if (this.form.valid) {
      this.processRunning = true;
      this.authenticationService.loginWithRole(
        this.getFieldValue('userName'),
        this.getFieldValue('password'),
        'ROLE_SUPER_ADMIN').subscribe({
          next: (response): void => {
            if(AuthentificationService.isLoggedId()) {
              this.processRunning = false;
              this.router.navigate([this.authenticationService.redirectUrl])
                .then((e) => {
                  if(!e) {
                    console.error('Navigation has failed !');
                  }
                })
            }
          }
        }
      )
    }
  }
}
