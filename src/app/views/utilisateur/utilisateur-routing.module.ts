import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { ListlocaliteComponent } from './localite/listlocalite/listlocalite.component';
import { ListpersonneComponent } from './personne/listpersonne/listpersonne.component';
import { ListprofileComponent } from './profile/listprofile/listprofile.component';
import { ListutilisateurComponent } from './utilisateur/listutilisateur/listutilisateur.component';

const routes: Routes = [
  {path: 'list-personne', component :ListpersonneComponent , canActivate:[AuthGuard]},
  {path: 'list-profile', component : ListprofileComponent, canActivate:[AuthGuard]},
  {path: 'list-utilisateur', component :ListutilisateurComponent, canActivate:[AuthGuard]},
  {path: 'list-localite', component : ListlocaliteComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
