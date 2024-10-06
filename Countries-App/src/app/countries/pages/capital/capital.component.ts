import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html'
})
export class CapitalComponent {
  
  constructor(
    private readonly countryService: CountryService
  ) { }

  term: string = '';
  error: boolean = false;
  countries: Country[] = [];
  txtPlaceholder: string = 'Search By Capital';

  search( event: string ) {
    this.error = false;
    this.term = event;
    this.countryService.searchCapital( event )
      .subscribe( 
        (res) => {
          this.countries = res;
        }, 
        (err) => {
          this.error = true;
          this.countries = [];
          console.log(err);
        }
      );
  }

  suggestions( event: string ) {
    this.error = false;
  }
}
