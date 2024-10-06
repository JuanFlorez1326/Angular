import { Component } from '@angular/core';
import { Games, User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html'
})
export class DynamicsComponent {
  
  newGame!: string;

  user: User = {
    name:'Juan Florez',
    games: [
      {
        id: 1, nameGame: 'Metal Gear'
      },
      {
        id: 2, nameGame: 'Death Stranding'
      }
    ]
  }

  addGame() {
    const newFavorite: Games = {
      id: this.user.games.length + 1,
      nameGame: this.newGame
    }
    this.user.games.push({ ...newFavorite });
    this.newGame = ''
  }
  
  save() {
    console.log('Save Successfully');
  }

  delete( index: number) {
    this.user.games.splice( index, 1)
  }
}