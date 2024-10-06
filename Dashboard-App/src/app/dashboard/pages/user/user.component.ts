import { ActivatedRoute } from '@angular/router';
import type { User } from '@interfaces/req-res.interface';
import { Component, computed, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { UsersService } from '@services/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [ TitleComponent ],
  template: `
    <app-title [title]="'Informacion del usuario ' + this.titleLabel()"/>

    @if (user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name">
        <h3>{{ user()!.first_name }} {{ user()!.last_name }}</h3>
        <p>{{ user()!.email}}</p>
      </section>
    } @else {
      <p>Loading user...</p>
    }
  `
})
export default class UserComponent {

  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public user = toSignal<User | undefined>(
    this.route.params.pipe(
      switchMap( ({ id }) => this.userService.getUserById(id))
    )
  );

  public titleLabel = computed( () => {
    return this.user() ? `${this.user()!.first_name} ${this.user()!.last_name}` : '';
  });
}