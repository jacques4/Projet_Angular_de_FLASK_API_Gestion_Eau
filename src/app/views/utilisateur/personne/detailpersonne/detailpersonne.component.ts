import { Component ,OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Personne } from 'src/app/views/models/personne';

@Component({
  selector: 'app-detailpersonne',
  templateUrl: './detailpersonne.component.html',
  styleUrls: ['./detailpersonne.component.scss']
})
export class DetailpersonneComponent implements OnInit {

  personne?: Personne;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.personne)
  }
  
  onClose(){
    this.activeModal.close();
  }
}
