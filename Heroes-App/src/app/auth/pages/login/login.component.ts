import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService
  ) {}

  login() {
    this.authService.login().subscribe(
      (response) => {
        console.log(response);
        if ( response.id ) {
          this.router.navigate(['/heroes'])
        }
      }
    )
  }
}
