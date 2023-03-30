import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/views/models/client';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import {Produit} from 'src/app/views/models/produit';
import {Commande} from 'src/app/views/models/commande';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClientService } from 'src/app/views/services/client.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';
import { CommandeService } from 'src/app/views/services/commande.service';
import { ProduitService } from 'src/app/views/services/produit.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createcommande',
  templateUrl: './createcommande.component.html',
  styleUrls: ['./createcommande.component.scss']
})
export class CreatecommandeComponent implements OnInit {
  use:any;
  form: FormGroup;
  commande?: Commande;
  listeclients: Array<Client> = new Array<Client>();
  listeutilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  listeproduits: Array<Produit> = new Array<Produit>();

  constructor(
    private builder: FormBuilder,
    private activeModal: NgbActiveModal,
    private clientService: ClientService,
    private produitService: ProduitService,
    private utilisateurService: UtilisateurService,
    private commandeService: CommandeService,
    private toastr:ToastrService

  ) { 


    this.form = this.builder.group({

      quantite: ['', [Validators.required]],
      client: ['', [Validators.required]],
      produit: ['', [Validators.required]],
    
    });
  }

  ngOnInit(): void {

    this.clientService.getAll().subscribe(data => {
      this.listeclients = data.Clients;
      console.log('chargement de client');
      console.table(this.listeclients);
    });

    this.produitService.getAll().subscribe(data => {
      this.listeproduits = data.produits;
      console.log('chargement de produit');
      console.table(this.listeproduits);
    });

    this.utilisateurService.getAll().subscribe(data => {
      this.listeutilisateurs = data.utilisateurs;
      console.log('chargement utilisateurs');
      console.table(this.listeutilisateurs);
    });

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  onClose(){
    this.activeModal.close();
  }

  onCreate(){

    this.commande = new Commande();

    this.commande.id_utilisateur = this.use?.id;
    this.commande.id_client = this.listeclients?.find(item => item.id == parseInt( this.form.controls['client'].value))?.id;
    this.commande.id_produit = this.listeproduits?.find(item => item.id == parseInt( this.form.controls['produit'].value))?.id;
    this.commande.quantite = this.form.controls['quantite'].value;
    console.log(this.commande);
    this.commandeService.create(this.commande).subscribe(data => {

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
