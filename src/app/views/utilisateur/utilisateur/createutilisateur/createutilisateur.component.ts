import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Localite } from 'src/app/views/models/localite';
import { Personne } from 'src/app/views/models/personne';
import { Profile } from 'src/app/views/models/profile';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { LocaliteService } from 'src/app/views/services/localite.service';
import { PersonneService } from 'src/app/views/services/personne.service';
import { ProfileService } from 'src/app/views/services/profile.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';

@Component({
  selector: 'app-createutilisateur',
  templateUrl: './createutilisateur.component.html',
  styleUrls: ['./createutilisateur.component.scss']
})
export class CreateutilisateurComponent implements OnInit{

  
  form: FormGroup;
  use:any;

  utilisateur?: Utilisateur;
  listeProfile: Array<Profile> = new Array<Profile>();
  listePersonne: Array<Personne> = new Array<Personne>();
  listeLocalite: Array<Localite> = new Array<Localite>();
 
  constructor(private activeModal: NgbActiveModal,
              private builder:FormBuilder, 
              private profileService:ProfileService,
              private personneService: PersonneService,
              private localiteService: LocaliteService,
              private utilisateurService: UtilisateurService,
              private toastr:ToastrService) { 

    this.form = this.builder.group({

      matricule: ['', [Validators.required] ],
      profile:['',[Validators.required]],
      personne:['',[Validators.required]],
      login: ['', [Validators.required]],
      mdp: ['', [Validators.required]],
      localite: ['', [Validators.required]],

    });

  }


  ngOnInit(): void {

    this.profileService.getAll().subscribe(data => {
      this.listeProfile = data.profile;
      console.log('chargement du profile');
      console.table(this.listeProfile);
    });

    this.personneService.getAll().subscribe(data => {
      this.listePersonne = data.personne;
      console.log('chargement personne');
      console.table(this.listePersonne);
    });

    this.localiteService.getAll().subscribe(data => {
      this.listeLocalite = data.localite;
      console.log('chargement localite');
      console.table(this.listeLocalite);
    });

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  onCreate(){

    this.utilisateur = new Utilisateur();

    this.utilisateur.id_utilisateur= this.use?.id;
    this.utilisateur.id_profile = this.listeProfile?.find(item => item.id == parseInt( this.form.controls['profile'].value))?.id;
    this.utilisateur.id_personne = this.listePersonne?.find(item => item.id == parseInt( this.form.controls['personne'].value))?.id;
    this.utilisateur.id_localite = this.listeLocalite?.find(item => item.id == parseInt( this.form.controls['localite'].value))?.id;
    this.utilisateur.matricule = this.form.controls['matricule'].value;
    this.utilisateur.login = this.form.controls['login'].value;
    this.utilisateur.mdp = this.form.controls['mdp'].value;
    console.log(this.utilisateur);

    this.utilisateurService.create(this.utilisateur).subscribe(data => {

      if(data.success === true){

        this.activeModal.close(true);
        this.toastr.info("Enregistrer", "OK")
       }
       else{
        this.toastr.error("Donnee erronee", "Information")
       }
    });

  }

  onClose(){
    this.activeModal.close();
  }
}
