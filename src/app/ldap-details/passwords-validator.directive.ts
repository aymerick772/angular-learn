import {AbstractControl, FormControl, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

export const passwordsMatchingValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPasword = control.get('confirmPassword');

    return password && confirmPasword && password.value === confirmPasword.value ?
      null : {passwordMatching : true}
}

export class ConfirmValidParentMatcher implements ErrorStateMatcher {
   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {

    const isSubmitted = form && form.submitted;
    return !!(control && control.parent
    && control.parent.invalid && (control.touched || isSubmitted))
  }
}
