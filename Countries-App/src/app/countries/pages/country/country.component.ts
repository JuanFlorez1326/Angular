import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styles: [ ` li { cursor: pointer } ` ]
})
export class CountryComponent {
  
  constructor(
    private readonly countryService: CountryService
  ) { }

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  displaySuggestions: boolean = false;
  txtPlaceholder: string = 'Search By Country';

  search( event: string ) {
    this.error = false;
    this.term = event;
    this.displaySuggestions = true
    this.countryService.searchCountry( event )
      .subscribe( 
        (res) => {
          console.log(res);
          this.countries = res;
        }
      );
  }

  suggestions( term: string ) {
    this.error = false;
    this.term = term
    this.displaySuggestions = true

    this.countryService.searchCountry( term )
    .subscribe( 
      country =>  this.suggestedCountries = country.splice( 0, 5 ),
      error => this.suggestedCountries = []
    )
  }

  searchSuggested(term: string) {
    this.search( term )
  }
}
