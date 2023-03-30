import { Component ,OnInit } from '@angular/core';

import { NgbModal , NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/views/models/client';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { TypeClient } from 'src/app/views/models/typeclient';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/views/services/client.service';
import { TypeclientService } from 'src/app/views/services/typeclient.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.scss']
})
export class CreateclientComponent implements OnInit {

  client?:Client
  isHiden=false;
  isHiden2=false;
  use:any;
  form: FormGroup;
  listeUtilisateur: Array<Utilisateur> = new Array<Utilisateur>();
  listeTypeClient: Array<TypeClient> = new Array<TypeClient>();

  constructor(
    private builder: FormBuilder,
    private activeModal: NgbActiveModal,
    private typeClientService: TypeclientService,
    private utilisateurService: UtilisateurService,
    private clientService: ClientService,
    private toastr:ToastrService
  ) { 


    this.form = this.builder.group({

      nom : ['',Validators.required],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      typeClient: ['',[Validators.required]],
      nif: ['', [Validators.required]],
      numrccm: ['',[Validators.required]],
     
    });
  }

  ngOnInit(): void {

    this.typeClientService.getAll().subscribe(data => {
      this.listeTypeClient = data.typeclient;
      console.log('chargement de type client');
      console.table(this.listeTypeClient);
    });

    this.utilisateurService.getAll().subscribe(data => {
      this.listeUtilisateur = data.utilisateurs;
      console.log('chargement des utilisateurs');
      console.table(this.listeUtilisateur);
    });

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  onClose(){
    this.activeModal.close();
  }

  onSelectClient(){
    this.client = new Client();

    this.client.typeclient = this.listeTypeClient?.find(item => item.id== this.form.controls['typeClient'].value);
     if(this.client.typeclient?.nom === 'societe'){
          this.isHiden = true;
          this.form.controls['prenom'].disable();

     }
     else if(this.client.typeclient?.nom === 'personne'){

       this.isHiden2 = true;

       this.form.controls['numrccm'].disable();
       this.form.controls['nif'].disable();
     }
      else
      {
       this.isHiden = false;
       this.isHiden2 = false;
      }

  }

  onCreate(){

    this.client = new Client();

    this.client.id_typeclient = this.listeTypeClient?.find(item => item.id == parseInt( this.form.controls['typeClient'].value))?.id;
    this.client.id_utilisateur = this.use?.id;
    this.client.nom = this.form.controls['nom'].value;
    this.client.nif = this.form.controls['nif'].value;
    this.client.numrccm = this.form.controls['numrccm'].value;
    this.client.prenom = this.form.controls['prenom'].value;
    this.client.adresse = this.form.controls['adresse'].value;
    this.client.tel = this.form.controls['tel'].value;
    this.client.email = this.form.controls['email'].value;
    console.log(this.client);

    console.log(this.form.controls['typeClient'].value);
    this.clientService.create(this.client).subscribe(data => {
      
      if(data.success === true){

        this.activeModal.close(true);
        this.toastr.info("Enregistrer", "OK")
       }
       else{
        this.toastr.error("Donnee erronee", "Information")
       }
      
    });
  }
}
