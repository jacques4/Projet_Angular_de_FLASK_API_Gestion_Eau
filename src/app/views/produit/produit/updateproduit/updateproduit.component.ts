import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Marque } from 'src/app/views/models/marque';
import { MarqueService } from 'src/app/views/services/marque.service';
import { ProduitService } from 'src/app/views/services/produit.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.scss']
})
export class UpdateproduitComponent implements OnInit{

  form: FormGroup;
  produit:any;
  listeMarque: Array<Marque> = new Array<Marque>();



  constructor(private builder:FormBuilder,
    private produitService: ProduitService,
    private activeModal:NgbActiveModal,
    private toastr:ToastrService,
    private marqueService:MarqueService) {

    this.form = this.builder.group({

      nom : ['',Validators.required],
      description: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
      prix: ['', [Validators.required]],
     
    });
   }

  ngOnInit(): void {

    this.marqueService.getAll().subscribe(data => {
      this.listeMarque = data.marque;
      console.log('chargement des marques');
      console.table(this.listeMarque);
    });

    this.form.controls['nom'].setValue(this.produit.marque.id);

  }

  onUpdate(){

    this.produit.id_marque = this.listeMarque?.find(item => item.id == parseInt( this.form.controls['nom'].value))?.id;
    this.produit.quantite = this.form.controls['quantite'].value;
    this.produit.prix = this.form.controls['prix'].value;
    this.produit.description = this.form.controls['description'].value;
    this.produitService.update(this.produit, this.produit.id).subscribe(data => {
  
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
