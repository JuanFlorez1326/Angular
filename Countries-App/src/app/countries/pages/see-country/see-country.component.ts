import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {
  
  constructor(
    private readonly countryService: CountryService,
    private readonly activateRoute: ActivatedRoute
  ) {}

  country!: Country;
  
  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({ id }) =>
        this.countryService.getContryByCode( id )
      ), tap( console.log )
    )
    .subscribe( res => {
      this.country = res[0];
    })
  }
}
