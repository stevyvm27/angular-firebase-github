import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "./service/auth.service";

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'stevy';

  constructor(
    public  authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.router.navigateByUrl('/login');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  register() {
      this.router.navigateByUrl('/register');
  }
}
