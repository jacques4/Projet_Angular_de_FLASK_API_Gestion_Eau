import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Commande } from 'src/app/views/models/commande';
import { CommandeService } from 'src/app/views/services/commande.service';
import { CreatecommandeComponent } from '../createcommande/createcommande.component';
import { DetailcommandeComponent } from '../detailcommande/detailcommande.component';
import { UpdatecommandeComponent } from '../updatecommande/updatecommande.component';

@Component({
  selector: 'app-listcommande',
  templateUrl: './listcommande.component.html',
  styleUrls: ['./listcommande.component.scss']
})
export class ListcommandeComponent implements OnInit {

  commande?: Array<Commande> =  new Array<Commande>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.commande)
  }

  findAll(): void {
    this.commandeService.getAll()
      .subscribe({
        next: (data) => {
          this.commande = data.Commande;
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
    const modalRef = this.modalService.open(CreatecommandeComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailcommandeComponent, {size: 'lg'});
    modalRef.componentInstance.commande = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdatecommandeComponent, {size: 'lg'});
  modalRef.componentInstance.commande = selectedItem;
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
      this.commande = this.commande?.filter(m =>

           m.produit?.marque?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.client?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.client?.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.quantite?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) 

      );
  }

}
}
