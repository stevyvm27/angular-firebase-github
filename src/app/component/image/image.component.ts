import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {

  image_1: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/tank21-300x225.jpg';
  image_2: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/tank311-300x225.jpg';
  image_3: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/sans-titre-300x225.png';

  image_4: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/reinigen91.jpg';
  image_5: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/reinigen111.jpg';
  image_6: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/afbreken_31.jpg';

  image_7: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/mazouttank_neutraliseren_opschuimen_1_van_5_medium1.jpg';
  image_8: string = 'https://usercontent.one/wp/www.debod.be/wp-content/uploads/2014/10/stookolietankproblemen_1_van_1_1_medium1.jpg';

  images: string[] = [
    this.image_1,
    this.image_2,
    this.image_3,
    this.image_4,
    this.image_5,
    this.image_6,
    this.image_7,
    this.image_8,
  ];

  currentImageIndex = 0;

  imageSuivante() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  imagePrecedente() {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
  }

}
