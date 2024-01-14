import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from "@angular/router";
import { AppComponent } from '../../app.component';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
          email: new FormControl('',Validators.required),
          password: new FormControl('',Validators.required)
  });

  messageIsVisible: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit(form: any) {
    this.authService.login(form.value.email, form.value.password)
      .subscribe(isLoggedIn => {
        console.log('isLoggedIn vaut :', isLoggedIn);
        if (isLoggedIn) {
          this.router.navigateByUrl('/actualite-page');
        } else {
          alert("email ou mot de passe incorecte !!!");
          this.loginForm.reset();

        }
      });
  }

}
