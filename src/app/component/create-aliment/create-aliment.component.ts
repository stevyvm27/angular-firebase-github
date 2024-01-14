import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AlimentService } from '../../service/aliment.service';
import { ImageUrlService } from '../../service/image-url.service';
import { Aliment } from '../../model/aliment';

@Component({
  selector: 'app-create-aliment',
  templateUrl: './create-aliment.component.html',
  styleUrl: './create-aliment.component.css'
})
export class CreateAlimentComponent {

  alimentForm = new FormGroup({
    nom: new FormControl('', Validators.required),
    calorie: new FormControl('', Validators.required),
    lipide: new FormControl('',Validators.required),
    glucide: new FormControl('',Validators.required),
    proteine: new FormControl('',Validators.required),
    index_glycemique: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.required)

  });

  aliment: Aliment| null = null;
  confirmMessage: boolean = false;
  imageUrl: string| null = null;

  constructor(
      private alimentService: AlimentService,
      private imageUrlService: ImageUrlService
    ) { }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    const filePath = 'aliment/' + file.name;

    this.imageUrlService.uploadImage(file, filePath)
      .then(downloadURL => {
        if(downloadURL){
          console.log('Image téléchargée avec succès. URL:', downloadURL);
          this.imageUrl = downloadURL;
        }
      })
      .catch(error => {
        console.error('Erreur lors du téléchargement de l\'image:', error);
      });
  }


  onSubmit(){
    const nomControl = this.alimentForm.get('nom');
    const nomValue: string = nomControl?.value?.toString() ?? '';

    const calorieControl = this.alimentForm.get('calorie');
    const calorieValue: string = calorieControl?.value?.toString() ?? '';

    const lipideControl = this.alimentForm.get('lipide');
    const lipideValue: string = lipideControl?.value?.toString() ?? '';

    const glucideControl = this.alimentForm.get('glucide');
    const glucideValue: string = glucideControl?.value?.toString() ?? '';

    const proteineControl = this.alimentForm.get('proteine');
    const proteineValue: string = proteineControl?.value?.toString() ?? '';

    const indexGlycemiqueControl = this.alimentForm.get('index_glycemique');
    const indexGlycemiqueValue: string = indexGlycemiqueControl?.value?.toString() ?? '';

    this.aliment = {
      nom: nomValue,
      calorie: calorieValue,
      lipide: lipideValue,
      glucide: glucideValue,
      proteine: proteineValue,
      index_glycemique: indexGlycemiqueValue,
      photo: this.imageUrl ?? ''
    };

    console.log(" add aliment :", this.aliment);
    this.alimentService.addAliment(this.aliment).subscribe({
      next: (result) => {
        console.log('Utilisateur ajouté avec succès. ID: ', result.id);
        this.confirmMessage = true;
        this.alimentForm.reset(); // Réinitialiser le formulaire après l'ajout
      },
      error: (err) => {
        // Gérer ici les erreurs lors de l'ajout d'utilisateur
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', err);
      }
    });
  }
}
