import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

  public fullName = computed(() => {
    return `${this.user().first_name} ${this.user().last_name}`;
  });

  public userChangeEffect =  effect(() => {
    console.log('User Change Effect Triggered');
  });

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  });

  public onFileUpdated( field: keyof User, value: string ): void {

    // this.user.set({
    //   ...this.user(),
    //   [field]: value
    // })

    // this.user.update( current => {
    //   return {
    //     ...current,
    //     [field]: value
    //   }
    // });

    // More efficient way
    this.user.update( current => {
      switch (field) {
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'id':
          current.id = Number(value);
      }
      return current;
    });
  }
}