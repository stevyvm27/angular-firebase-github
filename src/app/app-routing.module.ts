import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { CreateAlimentComponent } from './component/create-aliment/create-aliment.component';
import { ActualitePageComponent } from './page/actualite-page/actualite-page.component';
import { AlimentListPageComponent } from './page/aliment-list-page/aliment-list-page.component';

import { DebodPageComponent } from './page/debod-page/debod-page.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { EnlevementComponent } from './component/enlevement/enlevement.component';
import { EliminationComponent } from './component/elimination/elimination.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'create-aliment', component: CreateAlimentComponent, canActivate: [AuthGuard]},
  { path: 'debod-page', component: DebodPageComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: 'accueil', pathMatch: 'full' }, // Redirection par défaut vers 'accueil'
      { path: 'accueil', component: AccueilComponent },
      { path: 'elimination', component: EliminationComponent },
      { path: 'enlevement', component: EnlevementComponent },
  ]},
  { path: 'actualite-page', component: ActualitePageComponent, canActivate: [AuthGuard]},
  { path: 'aliment-list-page', component: AlimentListPageComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
