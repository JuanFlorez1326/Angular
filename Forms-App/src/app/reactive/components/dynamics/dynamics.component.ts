import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {

  constructor ( private fb: FormBuilder ) {}

  public formGroup: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  public newFavorite: FormControl = new FormControl('', Validators.required)

  public onDeleteFavorite( item: any) {
    if (item) this.favoriteGamesControl.removeAt(item);
  }

  public onAddToFavorites() {
    if (this.newFavorite.invalid) return;
    const game = this.newFavorite.value;
    this.favoriteGamesControl.push(this.fb.control(game, Validators.required));
    this.newFavorite.reset();
  }

  public onSubmit(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);
    (this.formGroup.controls['favoriteGames'] as FormArray) =  this.fb.array([]);
    this.formGroup.reset();
  }
  
  get favoriteGamesControl() {
    return this.formGroup.controls['favoriteGames'] as FormArray
  }

  public isValidField( field: string ): boolean | null {
    return this.formGroup.controls[field].errors
      && this.formGroup.controls[field].touched;
  }

  public isValidFieldInArray( formArray: FormArray, index: number ) {
    return formArray.controls[index].errors
      && formArray.controls[index].touched;
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