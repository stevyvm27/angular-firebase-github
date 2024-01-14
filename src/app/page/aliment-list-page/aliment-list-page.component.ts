import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-aliment-list-page',
  templateUrl: './aliment-list-page.component.html',
  styleUrl: './aliment-list-page.component.css'
})
export class AlimentListPageComponent {

  constructor(
    private router: Router
  ) {}

  goToCreateAliment() {
      this.router.navigateByUrl('/create-aliment');
  }



}
