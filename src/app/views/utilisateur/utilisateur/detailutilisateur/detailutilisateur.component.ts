import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Utilisateur } from 'src/app/views/models/utilisateur';

@Component({
  selector: 'app-detailutilisateur',
  templateUrl: './detailutilisateur.component.html',
  styleUrls: ['./detailutilisateur.component.scss']
})
export class DetailutilisateurComponent implements OnInit {

  utilisateur?: Utilisateur;

  constructor(private avtiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){
    this.avtiveModal.close();
  }


}
