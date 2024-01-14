import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';

import { map } from 'rxjs/operators';
import { Firestore, collection, getDocs, addDoc, doc, deleteDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrl: './actualite.component.css'
})
export class ActualiteComponent implements OnInit {

  userList: any = []

  constructor(
    private firestore:Firestore,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getData().subscribe((userData) => {
          console.log(userData);
          this.userList = userData;
    });
  }

  deleteData(id: string) {
    console.log('id :'+ id);
    const deleteData = doc(this.firestore, 'user', id);
    deleteDoc(deleteData)
    .then(() => {
      console.log("data supprimé ");
      this.getUsers();
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
