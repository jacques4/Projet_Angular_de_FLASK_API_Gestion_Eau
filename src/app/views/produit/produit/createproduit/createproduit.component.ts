import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Marque } from 'src/app/views/models/marque';
import { Produit } from 'src/app/views/models/produit';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { MarqueService } from 'src/app/views/services/marque.service';
import { ProduitService } from 'src/app/views/services/produit.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';

@Component({
  selector: 'app-createproduit',
  templateUrl: './createproduit.component.html',
  styleUrls: ['./createproduit.component.scss']
})
export class CreateproduitComponent implements OnInit{

 use:any;
  produit?:Produit;
  listeUtilisateur: Array<Utilisateur> = new Array<Utilisateur>();
  listeMarque: Array<Marque> = new Array<Marque>();
  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private activeModal: NgbActiveModal,
    private utilisateurService: UtilisateurService,
    private produitService: ProduitService,
    private toastr:ToastrService,
    private marqueService:MarqueService

  ) { 


    this.form = this.builder.group ({

      nom : ['',Validators.required],
      description: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      prix: ['', [Validators.required]], 
    });
  }

  ngOnInit(): void {

    this.utilisateurService.getAll().subscribe(data => {
      this.listeUtilisateur = data.utilisateurs;
      console.log('chargement des utilisateurs');
      console.table(this.listeUtilisateur);
    });

    this.marqueService.getAll().subscribe(data => {
      this.listeMarque = data.marque;
      console.log('chargement des marques');
      console.table(this.listeMarque);
    });

    sessionStorage.getItem('user');
    this.use = JSON.parse(sessionStorage.getItem('user')!);
    console.log(this.use);

  }

  onClose(){
    this.activeModal.close();
  }

  onCreate(){

    this.produit = new Produit();

    this.produit.id_utilisateur = this.use?.id;
    this.produit.id_marque = this.listeMarque?.find(item => item.id == parseInt( this.form.controls['nom'].value))?.id;
    this.produit.id_localite = this.use?.id_localite;
    this.produit.quantite = this.form.controls['quantite'].value;
    this.produit.description = this.form.controls['description'].value;
    this.produit.prix = this.form.controls['prix'].value;
    console.log(this.produit);
    this.produitService.create(this.produit).subscribe(data => {
 
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
