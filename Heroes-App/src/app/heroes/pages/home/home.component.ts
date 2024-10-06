import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ `.container { margin: 10px; }` ]
})
export class HomeComponent {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  get auth() {
    return this.authService.auth
  }

  logout() {
    this.router.navigate(['/auth']);
  }
  
}