import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap, switchMap } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = true;

  constructor(
    private userService: UserService
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return this.userService.getData().pipe(
      switchMap((userData) => {
        const foundUser = userData.find((user: any) => user.email === email && user.password === password);
        const isLoggedIn = !!foundUser; // Si un utilisateur correspondant est trouvé, isLoggedIn est true
        this.isLoggedIn = isLoggedIn; // Met à jour le statut de connexion
        return of(isLoggedIn).pipe(
          delay(1000),
          tap((isLoggedIn) => (this.isLoggedIn = isLoggedIn))
        );
      })
    );
  }

  logout(){
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
      return this.isLoggedIn;
    }
}
