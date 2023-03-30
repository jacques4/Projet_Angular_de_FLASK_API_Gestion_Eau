import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Client } from 'src/app/views/models/client';
import { ClientService } from 'src/app/views/services/client.service';
import { CreateclientComponent } from '../createclient/createclient.component';
import { DetailclientComponent } from '../detailclient/detailclient.component';
import { UpdateclientComponent } from '../updateclient/updateclient.component';

@Component({
  selector: 'app-listclient',
  templateUrl: './listclient.component.html',
  styleUrls: ['./listclient.component.scss']
})
export class ListclientComponent implements OnInit{

  client?: Array<Client> =  new Array<Client>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;
  user:any;


  constructor( private clientService: ClientService,
    private modalService: NgbModal,
   ) { }

  ngOnInit(): void {

  this.findAll();
  this.getLocation();

if(!navigator.geolocation){
  console.log('localisation');
}
navigator.geolocation.getCurrentPosition((position)=>{
  console.log(`lat : ${position.coords.latitude} , lon ${position.coords.longitude}`)
})

  sessionStorage.getItem('user');
  this.user = sessionStorage.getItem('user');
   console.log(this.user)

  }

  findAll(): void {
    this.clientService.getAll()
      .subscribe({
        next: (data) => {
          this.client = data.Clients;
          console.log(data);
          
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.findAll();
    this.currentIndex = -1;
  }


  getLocation(){
  this.clientService.getLocation().then(resp=>{
    console.log(resp.lng);
    console.log(resp.lat);
  })

  }
  
  create(){
    const modalRef = this.modalService.open(CreateclientComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailclientComponent, {size: 'lg'});
    modalRef.componentInstance.client = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdateclientComponent, {size: 'lg'});
  modalRef.componentInstance.client = selectedItem;
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
      this.client = this.client?.filter(m =>

           m.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.email?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.adresse?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.tel?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.numrccm?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase())



      );
  }

}

}
