import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageUrlService {

  constructor(
    private fireStorage: AngularFireStorage
  ) { }

  // retourne un url pour une image
  uploadImage(image: File, path: string): Promise<string> {
    const fileRef = this.fireStorage.ref(path); // Référence au chemin dans le stockage Firebase
    const uploadTask = fileRef.put(image); // Mettre en ligne l'image dans ce chemin

    return new Promise((resolve, reject) => {
      uploadTask.then(snapshot => {
        snapshot.ref.getDownloadURL().then(downloadURL => {
          resolve(downloadURL); // Récupérer l'URL de téléchargement de l'image
        }).catch(error => {
          reject(error);
        });
      }).catch(error => {
        reject(error);
      });
    });
  }
}
