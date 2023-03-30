import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/views/models/client';

@Component({
  selector: 'app-detailclient',
  templateUrl: './detailclient.component.html',
  styleUrls: ['./detailclient.component.scss']
})
export class DetailclientComponent implements OnInit {

  client?: Client;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.client)
  }
  
  onClose(){
    this.activeModal.close();
  }
}
