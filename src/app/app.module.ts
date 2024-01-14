import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

import { AngularFireModule } from '@angular/fire/compat'; // Importe AngularFireModule depuis '@angular/fire/compat'
import {AngularFireStorageModule } from '@angular/fire/compat/storage';

import { FIREBASE_OPTIONS } from '@angular/fire/compat';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualiteComponent } from './component/actualite/actualite.component';
import { AlimentListComponent } from './component/aliment-list/aliment-list.component';
import { ActualitePageComponent } from './page/actualite-page/actualite-page.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AlimentListPageComponent } from './page/aliment-list-page/aliment-list-page.component';
import { CreateAlimentComponent } from './component/create-aliment/create-aliment.component';
import { ImageComponent } from './component/image/image.component';
import { DebodPageComponent } from './page/debod-page/debod-page.component';
import { ContactComponent } from './component/contact/contact.component';
import { EliminationComponent } from './component/elimination/elimination.component';
import { EnlevementComponent } from './component/enlevement/enlevement.component';
import { AccueilComponent } from './component/accueil/accueil.component';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDE8BxEHI8zebWm02G5h9EmepmWDKlKwTY",
  authDomain: "angular-firebase-app-30a9b.firebaseapp.com",
  projectId: "angular-firebase-app-30a9b",
  storageBucket: "angular-firebase-app-30a9b.appspot.com",
  messagingSenderId: "212175571883",
  appId: "1:212175571883:web:88e61a1ca1e9c12a7de0ee"
};

@NgModule({
  declarations: [
    AppComponent,
    ActualiteComponent,
    ActualitePageComponent,
    LoginComponent,
    RegisterComponent,
    AlimentListComponent,
    AlimentListPageComponent,
    CreateAlimentComponent,
    ImageComponent,
    DebodPageComponent,
    ContactComponent,
    EliminationComponent,
    EnlevementComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)), // Utilisation de la méthode spécifique à @angular/fire pour initialiser Firebase
    provideFirestore(() => getFirestore()), // Utilisation de la méthode spécifique à @angular/fire pour obtenir Firestore
    provideStorage(() => getStorage()), // Configuration de Firebase Storage

    AngularFireModule, // Utilise AngularFireModule directement depuis '@angular/fire/compat'
    AngularFireStorageModule,

  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
