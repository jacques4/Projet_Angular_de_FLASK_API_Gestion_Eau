import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/views/models/profile';
import { ProfileService } from 'src/app/views/services/profile.service';
import { CreateprofileComponent } from '../createprofile/createprofile.component';
import { DetailprofileComponent } from '../detailprofile/detailprofile.component';
import { UpdateprofileComponent } from '../updateprofile/updateprofile.component';

@Component({
  selector: 'app-listprofile',
  templateUrl: './listprofile.component.html',
  styleUrls: ['./listprofile.component.scss']
})
export class ListprofileComponent  implements OnInit{


  profile?: Array<Profile> =  new Array<Profile>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,
       private profileService: ProfileService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.profileService.getAll()
      .subscribe({
        next: (data) => {
          this.profile = data.profile;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findAll();
    this.currentIndex = -1;
  }

  
  create(){
    const modalRef = this.modalService.open(CreateprofileComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailprofileComponent, {size: 'lg'});
    modalRef.componentInstance.profile = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdateprofileComponent, {size: 'lg'});
  modalRef.componentInstance.profile = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}


}
