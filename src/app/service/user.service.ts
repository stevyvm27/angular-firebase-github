import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collection, getDocs, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { QuerySnapshot, DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:Firestore){}

  // afficher la liste des users
  getData(): Observable<any[]> {
    const collectionInstance = collection(this.firestore, 'user');

    return new Observable<any[]>((observer) => {
      getDocs(collectionInstance).then((querySnapshot: QuerySnapshot<DocumentData>) => {
        const userData: any[] = querySnapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        observer.next(userData);
        observer.complete();
      }).catch((error) => {
        observer.error(error);
      });
    });
  }

  //enregistrer un user
  addUser(userData: any): Observable<any> {
    const collectionInstance = collection(this.firestore, 'user');

    return new Observable((observer) => {
      addDoc(collectionInstance, userData)
        .then((docRef) => {
          observer.next({ success: true, id: docRef.id });
          observer.complete();
        })
        .catch((error) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur : ', error);
          observer.error(error);
        });
    });
  }
}
