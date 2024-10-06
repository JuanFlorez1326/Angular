import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  @ViewChild('formProducts') formProducts!: NgForm;

  initialForm = {
    product: 'RTX 4080 Ti',
    price: 0,
    stock: 0
  }

  save() {
    console.log( this.formProducts );
    this.formProducts.resetForm({
      price: 0,
      stock: 0
    });
  }

  nameValid(): boolean {
    return this.formProducts?.controls['product']?.invalid &&
    this.formProducts?.controls['product']?.touched
  }

  priceValid(): boolean {
    return this.formProducts?.controls['price']?.touched &&
    this.formProducts?.controls['price'].value < 0
  }
}