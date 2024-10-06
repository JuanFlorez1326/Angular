import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html'
})
export class AllHeroesComponent implements OnInit {

  constructor(
    private heroesService: HeroesService
  ) { }

  heroes!: Heroe[];

  ngOnInit(): void {
    this.heroesService.getHeroes()
      .subscribe({
        next: ( heroes ) => this.heroes = heroes
      }
    )    
  }
}