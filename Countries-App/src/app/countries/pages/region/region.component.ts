import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [ ` button { margin-right: 5px } ` ]
})
export class RegionComponent {

  constructor(
    private readonly countryService :CountryService
  ) {}

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  countries: Country[] = []
  error: boolean = true

  getClass( region: string ): string {
    return (
      (region === this.activeRegion )
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
    )
  }

  activateRegion( code: string ) {
    if ( code === this.activeRegion) { return; }
    this.error = false;
    this.activeRegion = code;
    this.countries = []

    this.countryService.searchRegion( code )
      .subscribe( 
        (res) => {
          this.countries = res;
        }
      );
  }
}
