import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Localite } from 'src/app/views/models/localite';
import { LocaliteService } from 'src/app/views/services/localite.service';
import { CreatelocaliteComponent } from '../createlocalite/createlocalite.component';
import { DetaillocaliteComponent } from '../detaillocalite/detaillocalite.component';
import { UpdatelocaliteComponent } from '../updatelocalite/updatelocalite.component';

@Component({
  selector: 'app-listlocalite',
  templateUrl: './listlocalite.component.html',
  styleUrls: ['./listlocalite.component.scss']
})
export class ListlocaliteComponent implements OnInit{

  localite?: Array<Localite> =  new Array<Localite>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,
       private localiteService: LocaliteService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.localiteService.getAll()
      .subscribe({
        next: (data) => {
          this.localite = data.localite;
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
    const modalRef = this.modalService.open(CreatelocaliteComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetaillocaliteComponent, {size: 'lg'});
    modalRef.componentInstance.localite = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatelocaliteComponent, {size: 'lg'});
  modalRef.componentInstance.localite = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}


}
