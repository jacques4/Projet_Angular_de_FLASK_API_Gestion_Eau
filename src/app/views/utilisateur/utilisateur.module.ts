import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { DetailpersonneComponent } from './personne/detailpersonne/detailpersonne.component';
import { UpdatepersonneComponent } from './personne/updatepersonne/updatepersonne.component';
import { CreatepersonneComponent } from './personne/createpersonne/createpersonne.component';
import { ListpersonneComponent } from './personne/listpersonne/listpersonne.component';
import { ListlocaliteComponent } from './localite/listlocalite/listlocalite.component';
import { UpdatelocaliteComponent } from './localite/updatelocalite/updatelocalite.component';
import { CreatelocaliteComponent } from './localite/createlocalite/createlocalite.component';
import { DetaillocaliteComponent } from './localite/detaillocalite/detaillocalite.component';
import { DetailprofileComponent } from './profile/detailprofile/detailprofile.component';
import { CreateprofileComponent } from './profile/createprofile/createprofile.component';
import { UpdateprofileComponent } from './profile/updateprofile/updateprofile.component';
import { ListprofileComponent } from './profile/listprofile/listprofile.component';
import { CreateutilisateurComponent } from './utilisateur/createutilisateur/createutilisateur.component';
import { UpdateutilisateurComponent } from './utilisateur/updateutilisateur/updateutilisateur.component';
import { ListutilisateurComponent } from './utilisateur/listutilisateur/listutilisateur.component';
import { DetailutilisateurComponent } from './utilisateur/detailutilisateur/detailutilisateur.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DetailpersonneComponent,
    UpdatepersonneComponent,
    CreatepersonneComponent,
    ListpersonneComponent,
    ListlocaliteComponent,
    UpdatelocaliteComponent,
    CreatelocaliteComponent,
    DetaillocaliteComponent,
    DetailprofileComponent,
    CreateprofileComponent,
    UpdateprofileComponent,
    ListprofileComponent,
    CreateutilisateurComponent,
    UpdateutilisateurComponent,
    ListutilisateurComponent,
    DetailutilisateurComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UtilisateurModule { }
