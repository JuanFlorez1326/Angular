import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {

  inUppercase: boolean = true;
  orderBy: string = '';

  heroes: Heroe[] = [
    {
      name: 'Superman',
      flying: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      flying: false,
      color: Color.black
    },
    {
      name: 'Robin',
      flying: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      flying: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      flying: true,
      color: Color.green
    }
  ]

  toggleUppercase() {
    this.inUppercase = !this.inUppercase;
  }

  changeOrder( value: string ) {
    this.orderBy = value;
  }
}