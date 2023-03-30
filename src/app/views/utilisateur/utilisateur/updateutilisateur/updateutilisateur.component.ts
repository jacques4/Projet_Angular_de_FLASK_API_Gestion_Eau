import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Localite } from 'src/app/views/models/localite';
import { Personne } from 'src/app/views/models/personne';
import { Profile } from 'src/app/views/models/profile';
import { LocaliteService } from 'src/app/views/services/localite.service';
import { PersonneService } from 'src/app/views/services/personne.service';
import { ProfileService } from 'src/app/views/services/profile.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.scss']
})
export class UpdateutilisateurComponent implements OnInit {

  form: FormGroup;
  listeProfile: Array<Profile> = new Array<Profile>();
  listePersonne: Array<Personne> = new Array<Personne>();
  listeLocalite: Array<Localite> = new Array<Localite>();

  utilisateur:any;


  constructor(private builder:FormBuilder,
    private utilisateurService: UtilisateurService,
    private profileService: ProfileService,
    private personneService: PersonneService,
    private localiteService: LocaliteService,
    private activeModal:NgbActiveModal,
    private toastr:ToastrService) {

    this.form = this.builder.group({

      matricule: ['', [Validators.required] ],
      profile:['',[Validators.required]],
      login: ['', [Validators.required]],
      status: ['', [Validators.required]],
      personne: ['', [Validators.required]],
      localite: ['', [Validators.required]],

    });
   }

  ngOnInit(): void {

    this.profileService.getAll().subscribe(data => {
      this.listeProfile = data.profile;
      console.log('chargement de profile');
      console.table(this.listeProfile);
    });

    this.localiteService.getAll().subscribe(data => {
      this.listeLocalite = data.localite;
      console.log('chargement localite');
      console.table(this.listeLocalite);
    });

    this.personneService.getAll().subscribe(data => {
      this.listePersonne = data.personne;
      console.log('chargement personne');
      console.table(this.listePersonne);
    });

    this.form.controls['profile'].setValue(this.utilisateur.profile.id);
    this.form.controls['localite'].setValue(this.utilisateur.localite.id);
    this.form.controls['personne'].setValue(this.utilisateur.personne.id);

  }

  onUpdate(){

    this.utilisateur.matricule = this.form.controls['matricule'].value;
    this.utilisateur.login = this.form.controls['login'].value;
    this.utilisateur.status = this.form.controls['status'].value;
    this.utilisateur.id_profile = this.listeProfile?.find(item => item.id == parseInt( this.form.controls['profile'].value))?.id;
    this.utilisateur.id_personne = this.listePersonne?.find(item => item.id == parseInt( this.form.controls['personne'].value))?.id;
    this.utilisateur.id_localite = this.listeLocalite?.find(item => item.id == parseInt( this.form.controls['localite'].value))?.id;
    this.utilisateurService.update(this.utilisateur, this.utilisateur.id).subscribe(data => {
  
      if(data.Sucess ===true){

        this.activeModal.close(true);
        this.toastr.warning("Mis a jour","OK");
       }
       else{
        this.toastr.error("Mis a jour echouee ","Information");
       }
  
  });
  }

  controlOnChange(event : any){
    if(event.target.checked){
      this.form.controls['status'].setValue(event.target.checked);
    } else {
      console.log(event.target.checked)
      this.form.controls['status'].setValue(event.target.checked);
    }
  }

  onClose(){
    this.activeModal.close();

  }

}
