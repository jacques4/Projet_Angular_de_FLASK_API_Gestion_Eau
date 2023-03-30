import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Commande } from 'src/app/views/models/commande';

@Component({
  selector: 'app-detailcommande',
  templateUrl: './detailcommande.component.html',
  styleUrls: ['./detailcommande.component.scss']
})
export class DetailcommandeComponent implements OnInit{

  commande?: Commande;

  constructor(private avtiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){
    this.avtiveModal.close();
  }


}
