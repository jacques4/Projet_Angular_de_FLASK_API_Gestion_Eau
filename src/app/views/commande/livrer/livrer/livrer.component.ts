import { Component ,OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Livrer } from 'src/app/views/models/livrer';
import { LivrerService } from 'src/app/views/services/livrer.service';
import { CreatelivrerComponent } from '../createlivrer/createlivrer.component';
import { DetaillivrerComponent } from '../detaillivrer/detaillivrer.component';
import { UpdatelivrerComponent } from '../updatelivrer/updatelivrer.component';

@Component({
  selector: 'app-livrer',
  templateUrl: './livrer.component.html',
  styleUrls: ['./livrer.component.scss']
})
export class LivrerComponent implements  OnInit{

 livrer?: Array<Livrer> =  new Array<Livrer>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,
    private livrerService: LivrerService,
   ) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.livrer)

   

  }

  findAll(): void {
    this.livrerService.getAll()
      .subscribe({
        next: (data) => {
          this.livrer = data.Livrer;
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
    const modalRef = this.modalService.open(CreatelivrerComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetaillivrerComponent, {size: 'lg'});
    modalRef.componentInstance.livrer = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatelivrerComponent, {size: 'lg'});
  modalRef.componentInstance.livrer = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}

}
