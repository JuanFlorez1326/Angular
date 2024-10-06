import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '@interfaces/req-res.interface';
import { delay, map } from 'rxjs';

interface State {
  users: User[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly url: string = 'https://reqres.in/api/users';
  public http = inject(HttpClient);

  // # - Private
  #state = signal<State>({
    loading: true,
    users: []
  });

  public users   = computed( () => this.#state().users);
  public loading = computed( () => this.#state().loading);

  constructor() {
    console.log('Loading...');
    this.http.get<UsersResponse>(this.url).pipe( delay(2000)).subscribe({
      next: (res: UsersResponse) => {
        this.#state.set({
          users: res.data,
          loading: false
        });
      },
      error: (err) => console.log(err),
      complete: () => console.log('Completed')      
    })
  }

  public getUserById( id: string ) {
    return this.http.get<UserResponse>(`${this.url}/${id}`).pipe( 
      delay(2000),
      map(res => res.data)
    );
  }
}
