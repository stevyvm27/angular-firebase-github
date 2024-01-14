import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { ImageUrlService } from '../../service/image-url.service';
import { User } from '../../model/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  userForm = new FormGroup({
    photo: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  user: User| undefined;
  confirmMessage: boolean = false;
  imageUrl: string| undefined;

  constructor(
    private userService: UserService,
    private imageUrlService: ImageUrlService
  ) { }

  ngOnInit(): void {
    this.confirmMessage = false;
  }

  onSubmit(): void {
    const emailControl = this.userForm.get('email');
    const emailValue: string | undefined = emailControl?.value ?? undefined;

    const nameControl = this.userForm.get('name');
    const nameValue: string | undefined = nameControl?.value ?? undefined;

    const passwordControl = this.userForm.get('password');
    const passwordValue: string | undefined = passwordControl?.value ?? undefined;

    this.user = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
      photo: this.imageUrl
    };

    this.userService.addUser(this.user).subscribe({
      next: (result) => {
        console.log('Utilisateur ajouté avec succès. ID: ', result.id);
        this.confirmMessage = true;
        this.userForm.reset(); // Réinitialiser le formulaire après l'ajout
      },
      error: (err) => {
        // Gérer ici les erreurs lors de l'ajout d'utilisateur
        console.error('Erreur lors de l\'ajout de l\'utilisateur : ', err);
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const filePath = 'user/' + file.name; // Chemin où stocker l'image

    this.imageUrlService.uploadImage(file, filePath)
      .then(downloadURL => {
        // Utilisez l'URL de téléchargement (downloadURL) comme nécessaire
        console.log('Image téléchargée avec succès. URL:', downloadURL);
        this.imageUrl = downloadURL;
      })
      .catch(error => {
        console.error('Erreur lors du téléchargement de l\'image:', error);
      });
  }
}
