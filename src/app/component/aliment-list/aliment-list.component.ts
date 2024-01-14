import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { AlimentService } from '../../service/aliment.service';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrl: './aliment-list.component.css'
})
export class AlimentListComponent implements OnInit {

  alimentList: any = []

  constructor(
    private alimentService: AlimentService
  ){}

  ngOnInit(): void {
    this.getAlimentList();
  }

  getAlimentList() {
    this.alimentService.getAlimentList().subscribe((alimentData) => {
          console.table(alimentData);
          this.alimentList = alimentData;
    });
  }

}
