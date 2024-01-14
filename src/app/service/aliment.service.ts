import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collection, getDocs, addDoc, doc, deleteDoc } from '@angular/fire/firestore';
import { QuerySnapshot, DocumentData } from '@angular/fire/firestore';
import { Aliment } from'../model/aliment';

@Injectable({
  providedIn: 'root'
})
export class AlimentService {

  constructor(private firestore:Firestore){}

  //enregistrer un Aliment
  addAliment(alimentData: any): Observable<any> {
    const collectionInstance = collection(this.firestore, 'aliment');

    return new Observable((observer) => {
      addDoc(collectionInstance, alimentData)
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

  // afficher la liste des Aliments
    getAlimentList(): Observable<any[]> {
      const collectionInstance = collection(this.firestore, 'aliment');

      return new Observable<any[]>((observer) => {
        getDocs(collectionInstance).then((querySnapshot: QuerySnapshot<DocumentData>) => {
          const alimentData: any[] = querySnapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });

          observer.next(alimentData);
          observer.complete();
        }).catch((error) => {
          observer.error(error);
        });
      });
    }
}
