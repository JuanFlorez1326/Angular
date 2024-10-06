import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  private userService: UsersService = inject( UsersService );

  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);
  public userId = signal(1);

  public fullName = computed<string>( () => {
    if( !this.currentUser()) return 'User not found';
    return `${this.currentUser()!.first_name} ${this.currentUser()!.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser( this.userId() );
  }

  public loadUser( id: number ): void {
    if( id <= 0 ) return;

    this.userId.set( id );
    this.userService.getUserById( id ).subscribe({
      next: ( user: User ) => {
        this.currentUser.set( user );
        this.userWasFound.set( true );
      },
      error: () => {
        this.currentUser.set( undefined );
        this.userWasFound.set( false );
      }
    });
  }
}