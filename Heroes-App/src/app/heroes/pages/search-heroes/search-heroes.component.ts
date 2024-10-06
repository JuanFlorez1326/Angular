import { Component } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-heroes',
  templateUrl: './search-heroes.component.html'
})
export class SearchHeroesComponent {

  constructor(
    private heroesService: HeroesService,
  ) {}

  term: string = '';
  heroes: Heroe[] = [];
  heroeSelected!: Heroe | undefined;


  search() {
    this.heroesService.getSuggestions(this.term.trim())
    .subscribe({next: (heroes) => this.heroes = heroes});
  }

  optionSelected( heroe: MatAutocompleteSelectedEvent) {
    if (!heroe.option.value) {
      this.heroeSelected = undefined;
      return;
    }

    const heroeSelected = heroe.option.value
    this.term = heroeSelected.superhero;
    this.heroesService.getHeroById(heroeSelected.id!)
    .subscribe({ next: (heroe) => this.heroeSelected = heroe });
  }
}
