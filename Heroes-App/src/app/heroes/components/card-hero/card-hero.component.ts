import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styles: [ `mat-card { margin-top:20px }` ]
})
export class CardHeroComponent {
  @Input('all-heroes') hero!: Heroe;
}
