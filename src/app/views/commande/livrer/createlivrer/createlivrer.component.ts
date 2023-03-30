import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Livrer} from 'src/app/views/models/livrer';
import {Commande} from 'src/app/views/models/commande';
import { CommandeService } from 'src/app/views/services/commande.service';
import {LivrerService } from 'src/app/views/services/livrer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';



@Component({
  selector: 'app-createlivrer',
  templateUrl: './createlivrer.component.html',
  styleUrls: ['./createlivrer.component.scss']
})
export class CreatelivrerComponent implements OnInit {

  use:any;
  form: FormGroup;
  listeutilisateur?: Array<Utilisateur> =  new Array<Utilisateur>();
  livrer?: Livrer;
  listecommandes: Array<Commande> = new Array<Commande>();

  constructor(
    private builder: FormBuilder,
    private activeModal: NgbActiveModal,
    private livrerService: LivrerService,
    private commandeService: CommandeService,
    private toastr:ToastrService,
    private utilisateurService: UtilisateurService

  ) { 


    this.form = this.builder.group({

      quantite: ['', [Validators.required]],
      date: ['', [Validators.required]],
      commande: ['', [Validators.required]],
      utilisateur: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {

    this.commandeService.getAll().subscribe(data => {
      this.listecommandes = data.Commande;
      console.log('chargement de commande');
      console.table(this.listecommandes);
    });

    this.utilisateurService.getAll().subscribe(data => {
      this.listeutilisateur = data.utilisateurs;
      console.log('chargement du utilisateur');
      console.table(this.listeutilisateur);
    });

    
    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  onClose(){
    this.activeModal.close();
  }

  onCreate(){

    this.livrer = new Livrer();

    //this.livrer.id_utilisateur = this.use?.id;
    this.livrer.id_utilisateur = this.listeutilisateur?.find(item => item.id == parseInt( this.form.controls['utilisateur'].value))?.id;
    this.livrer.id_commande = this.listecommandes?.find(item => item.id == parseInt( this.form.controls['commande'].value))?.id;
    this.livrer.quantite = this.form.controls['quantite'].value;
    this.livrer.date = this.form.controls['date'].value;
    console.log(this.livrer);
    this.livrerService.create(this.livrer).subscribe(data => {
 
      if(data.success === true){

        this.activeModal.close(true);
        this.toastr.info("Enregistrer", "OK")
       }
       else{
        this.toastr.error("Quantite ou donnee erronee", "Information")
       }
      
    });

  }

}
