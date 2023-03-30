import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/views/models/profile';

@Component({
  selector: 'app-detailprofile',
  templateUrl: './detailprofile.component.html',
  styleUrls: ['./detailprofile.component.scss']
})
export class DetailprofileComponent implements OnInit{

  profile? : Profile;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){

    this.activeModal.close();
  }


}
