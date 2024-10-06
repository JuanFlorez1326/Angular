import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
// import * as customValidators from 'src/app/shared/validators/validators.helpers';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  constructor(
    private fb: FormBuilder,
    private emailValidator: EmailValidatorService,
    private validatorsService: ValidatorsService
  ) {}

  // public myForm: FormGroup =  this.fb.group({
  //   name: ['', [ Validators.required, Validators.pattern(customValidators.firstNameAndLastnamePattern) ]],
  //   email: ['', [ Validators.required, Validators.pattern(customValidators.emailPattern) ]],
  //   username: ['', [ Validators.required, customValidators.cantBeStrider ]],
  //   password: ['', [ Validators.required, Validators.minLength(6) ]],
  //   password2: ['', [ Validators.required ]]
  // })

  public myForm: FormGroup =  this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorsService.firstNameAndLastnamePattern) ]],
    // email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ new EmailValidator() ]],
    email: ['', [ Validators.required, Validators.pattern(this.validatorsService.emailPattern) ], [ this.emailValidator ]],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]]
  }, {
    validators: [
      this.validatorsService.isFieldOneEquialFieldTwo('password', 'password2')
    ]
  })

  public isValidField(field: string) {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  public onSubmit() {
    this.myForm.markAllAsTouched();
  }
}