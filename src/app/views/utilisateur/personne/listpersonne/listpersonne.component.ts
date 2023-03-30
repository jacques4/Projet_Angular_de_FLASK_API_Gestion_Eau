import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Personne } from 'src/app/views/models/personne';
import { PersonneService } from 'src/app/views/services/personne.service';
import { CreatepersonneComponent } from '../createpersonne/createpersonne.component';
import { DetailpersonneComponent } from '../detailpersonne/detailpersonne.component';
import { UpdatepersonneComponent } from '../updatepersonne/updatepersonne.component';

@Component({
  selector: 'app-listpersonne',
  templateUrl: './listpersonne.component.html',
  styleUrls: ['./listpersonne.component.scss']
})
export class ListpersonneComponent implements OnInit {

  personne?: Array<Personne> =  new Array<Personne>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;


  constructor( private personneService: PersonneService,
    private modalService: NgbModal ) { }

  ngOnInit(): void {

  this.findAll();

  }

  findAll(): void {
    this.personneService.getAll()
      .subscribe({
        next: (data) => {
          this.personne = data.personne;
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
    const modalRef = this.modalService.open(CreatepersonneComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailpersonneComponent, {size: 'lg'});
    modalRef.componentInstance.personne = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatepersonneComponent, {size: 'lg'});
  modalRef.componentInstance.personne = selectedItem;
  modalRef.result.then((result) => {
    this.findAll();
  }).catch((error) => {
    console.log('annulé');
  });
}

search(){
  this.page = 1;
  if (!this.searchInput){
      this.findAll();
  } else {
      // @ts-ignore
      this.personne = this.personne?.filter(m =>

           m.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.email?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.tel?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.adresse?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase())
         
      );
  }

}


}
