import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add-heroes',
  templateUrl: './add-heroes.component.html',
  styles: [` img { width: 100%; border-radius: 5px } `]
})
export class AddHeroesComponent implements OnInit {

  constructor(
    private readonly heroesService: HeroesService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly _snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) { }


  ngOnInit(): void {
    if(!this.router.url.includes('edit-hero')) {
      return;
    }
    this.activatedRoute.params
    .pipe(
      switchMap(({ id }) => this.heroesService.getHeroById(id))
    )
    .subscribe( data => this.heroe = data );
  }


  publishers = [ 
    { id: 'DC Comics', name: 'DC - Comics' },
    { id: 'Marvel Comics', name: 'Marvel - Comics' }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }

  saveHero() {
    if(this.heroe.superhero.trim().length === 0) { return; }

    if(this.heroe.id) {
      this.heroesService.updateHero(this.heroe)
      .subscribe(heroe => {
        console.log(heroe)
        this.seeMessage('Hero Upgraded successfully')
      });
    } else {
      this.heroesService.addHero(this.heroe)
      .subscribe(heroe => {
        console.log(heroe);
        this.router.navigate(['/heroes/edit-hero', heroe.id]);
        this.seeMessage('Hero Created Successfully')
      });
    }
  }

  deleteHero() {
     const dialog = this.dialog.open( ConfirmComponent, {
      width: '250px',
      data: { ...this.heroe }
    })
    dialog.afterClosed().subscribe(
      (result) => {
        if(result) {
          this.heroesService.deleteHero( this.heroe.id! )
          .subscribe(res => {
            console.log(res);
            this.router.navigate(['/heroes'])
          })
        }
      }
    )
  }

  seeMessage( msg: string ) {
    this._snackBar.open( msg, 'Close', {
      duration: 2500
    })
  }
}