import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Localite } from 'src/app/views/models/localite';
import { Marque } from 'src/app/views/models/marque';
import { MarqueService } from 'src/app/views/services/marque.service';
import { CreatemarqueComponent } from '../createmarque/createmarque.component';
import { UpdatemarqueComponent } from '../updatemarque/updatemarque.component';

@Component({
  selector: 'app-listmarque',
  templateUrl: './listmarque.component.html',
  styleUrls: ['./listmarque.component.scss']
})
export class ListmarqueComponent {

  marque?: Array<Marque> =  new Array<Marque>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,
       private marqueService: MarqueService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.marqueService.getAll()
      .subscribe({
        next: (data) => {
          this.marque = data.marque;
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
    const modalRef = this.modalService.open(CreatemarqueComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatemarqueComponent, {size: 'lg'});
  modalRef.componentInstance.marque = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}

}
