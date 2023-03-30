import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from 'src/app/views/models/produit';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.scss']
})
export class DetailproduitComponent {

  produit?: Produit;

  constructor(private avtiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){
    this.avtiveModal.close();
  }

}
