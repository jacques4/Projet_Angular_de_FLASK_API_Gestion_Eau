import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeClient } from 'src/app/views/models/typeclient';

@Component({
  selector: 'app-detailtypeclient',
  templateUrl: './detailtypeclient.component.html',
  styleUrls: ['./detailtypeclient.component.scss']
})
export class DetailtypeclientComponent implements OnInit{

  typeclient? : TypeClient;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){

    this.activeModal.close();
  }


}
