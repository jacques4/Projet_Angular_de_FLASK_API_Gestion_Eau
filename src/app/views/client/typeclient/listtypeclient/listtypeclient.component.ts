import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TypeClient } from 'src/app/views/models/typeclient';
import { TypeclientService } from 'src/app/views/services/typeclient.service';
import { CreatetypeclientComponent } from '../createtypeclient/createtypeclient.component';
import { DetailtypeclientComponent } from '../detailtypeclient/detailtypeclient.component';
import { UpdatetypeclientComponent } from '../updatetypeclient/updatetypeclient.component';

@Component({
  selector: 'app-listtypeclient',
  templateUrl: './listtypeclient.component.html',
  styleUrls: ['./listtypeclient.component.scss']
})
export class ListtypeclientComponent implements OnInit{

  typeclient?: Array<TypeClient> =  new Array<TypeClient>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,
       private typeclientService: TypeclientService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.typeclientService.getAll()
      .subscribe({
        next: (data) => {
          this.typeclient = data.typeclient;
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
    const modalRef = this.modalService.open(CreatetypeclientComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailtypeclientComponent, {size: 'lg'});
    modalRef.componentInstance.typeclient = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatetypeclientComponent, {size: 'lg'});
  modalRef.componentInstance.typeclient = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}

delete(id: any) {

  this.typeclientService.delete(id).subscribe(data=>{
    this.findAll();
  });
}

}
