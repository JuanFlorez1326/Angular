import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as api } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';
import { Observable, tap, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) {}

  private _auth: Auth | undefined;
  private url: string = api.baseUrl;

  get auth(): Auth {
    return { ...this._auth! }
  }
  
  verifyAuthentication(): Observable<boolean> {
    if (!sessionStorage.getItem('ID')) {
      return of( false )
    }
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      map( auth => {
        console.log('MAP',auth);
        this._auth = auth
        return true 
      })
    )
  }

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.url}/usuarios/1`)
    .pipe(
      tap( auth => this._auth  = auth ),
      tap(auth => sessionStorage.setItem('ID', auth.id))
    )
  }

  logout(){
    this._auth = undefined
  }
}