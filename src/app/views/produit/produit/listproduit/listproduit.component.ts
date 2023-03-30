import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from 'src/app/views/models/produit';
import { ProduitService } from 'src/app/views/services/produit.service';
import { CreateproduitComponent } from '../createproduit/createproduit.component';
import { DetailproduitComponent } from '../detailproduit/detailproduit.component';
import { UpdateproduitComponent } from '../updateproduit/updateproduit.component';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.scss']
})
export class ListproduitComponent implements OnInit {


  produit?: Array<Produit> =  new Array<Produit>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;

  constructor(private modalService: NgbModal,private produitService: ProduitService) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.produit)
  }

  findAll(): void {
    this.produitService.getAll()
      .subscribe({
        next: (data) => {
          this.produit = data.produits;
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
    const modalRef = this.modalService.open(CreateproduitComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailproduitComponent, {size: 'lg'});
    modalRef.componentInstance.produit = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdateproduitComponent, {size: 'lg'});
  modalRef.componentInstance.produit = selectedItem;
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
      this.produit = this.produit?.filter(m =>

           m.marque?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.quantite?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) 

      );
  }

}
}
