import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(
    private readonly http: HttpClient
  ) { }

  private apiUrl: string = 'https://restcountries.com/v3.1/' 

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(url)
  }

  searchRegion( code: string ): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${code}`;
    return this.http.get<Country[]>(url)
  }

  getContryByCode( id: string ): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url)
  }
  
}