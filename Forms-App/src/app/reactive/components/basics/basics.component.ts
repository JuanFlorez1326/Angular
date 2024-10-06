import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  public formGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  });

  public onSaveForm() {
    if (this.formGroup.invalid ) return;
    console.log(this.formGroup.value);
    this.formGroup.reset();
  }

  public isValidField( field: string ): boolean | null {
    return this.formGroup.controls[field].errors
      && this.formGroup.controls[field].touched;
  }

  public getFieldError( field: string ): string | null {

    if (!this.formGroup.controls[field]) return null;
    const errors = this.formGroup.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracteres.` ;
      } 
    }

    return null;
  }
}