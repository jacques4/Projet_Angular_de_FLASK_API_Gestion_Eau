import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/views/models/client';
import { Produit } from 'src/app/views/models/produit';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { ClientService } from 'src/app/views/services/client.service';
import { CommandeService } from 'src/app/views/services/commande.service';
import { ProduitService } from 'src/app/views/services/produit.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';

@Component({
  selector: 'app-updatecommande',
  templateUrl: './updatecommande.component.html',
  styleUrls: ['./updatecommande.component.scss']
})
export class UpdatecommandeComponent implements OnInit{

  form: FormGroup;
  commande: any;
  listeclients: Array<Client> = new Array<Client>();
  listeutilisateurs: Array<Utilisateur> = new Array<Utilisateur>();
  listeproduits: Array<Produit> = new Array<Produit>();

  constructor( private builder: FormBuilder,
    private activeModal: NgbActiveModal,
    private clientService: ClientService,
    private produitService: ProduitService,
    private utilisateurService: UtilisateurService,
    private commandeService: CommandeService,
    private toastr: ToastrService) { 

      this.form = this.builder.group({

        quantite: ['', [Validators.required]],
        status: ['', [Validators.required]],
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


    this.form.controls['client'].setValue(this.commande.client.id);
    this.form.controls['produit'].setValue(this.commande.produit.id);
  }


  controlOnChange(event : any){
    if(event.target.checked){
      this.form.controls['status'].setValue(event.target.checked);
    } else {
      console.log(event.target.checked)
      this.form.controls['status'].setValue(event.target.checked);
    }
  }

  onUpdate(){

    this.commande.id_client = this.listeclients?.find(item => item.id == parseInt( this.form.controls['client'].value))?.id;
    this.commande.id_produit = this.listeproduits?.find(item => item.id == parseInt( this.form.controls['produit'].value))?.id;
    this.commande.status = this.form.controls['status'].value;
    this.commande.quantite = this.form.controls['quantite'].value;
    console.log(this.commande);
    this.commandeService.update(this.commande, this.commande.id).subscribe(data => {
 
      if(data.Sucess ===true){

        this.activeModal.close(true);
        this.toastr.warning("Mis a jour","OK");
       }
       else{
        this.toastr.error("Mis a jour echouee ","Information");
       }
      
    });

  }

  onClose(){

    this.activeModal.close();
  }

}
