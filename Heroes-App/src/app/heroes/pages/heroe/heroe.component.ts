import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [ `img { width:100%; border-radius:5px }` ]
})
export class HeroeComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  heroe!: Heroe;

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    )
    .subscribe({next: heroe => {
      console.log(heroe);
      this.heroe = heroe;
    }});
  }

  goBack() {
    this.router.navigate(['/heroes/all-heroes']);
  }
}