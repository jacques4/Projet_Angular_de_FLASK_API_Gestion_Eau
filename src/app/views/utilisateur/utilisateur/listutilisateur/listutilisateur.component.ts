import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';
import { CreateutilisateurComponent } from '../createutilisateur/createutilisateur.component';
import { DetailutilisateurComponent } from '../detailutilisateur/detailutilisateur.component';
import { UpdateutilisateurComponent } from '../updateutilisateur/updateutilisateur.component';


@Component({
  selector: 'app-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss']
})
export class ListutilisateurComponent implements OnInit {

  
  utilisateur?: Array<Utilisateur> =  new Array<Utilisateur>();
  currentIndex = -1;
  title = '';
  searchInput: string ="";
  page=1;
  avatar ="../../../../../assets/avatar.png";

  constructor(private modalService: NgbModal,
    private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    this.findAll();
    console.log(this.utilisateur)
  }

  findAll(): void {
    this.utilisateurService.getAll()
      .subscribe({
        next: (data) => {
          this.utilisateur = data.utilisateurs;
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
    const modalRef = this.modalService.open(CreateutilisateurComponent,  {size: 'lg'});
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('annulé');
    });
  }



  detail(selectedItem: any) {
    console.log(selectedItem)
    const modalRef = this.modalService.open(DetailutilisateurComponent, {size: 'lg'});
    modalRef.componentInstance.utilisateur = selectedItem;
    modalRef.result.then((result) => {
      this.findAll();
    }).catch((error) => {
      console.log('errot '+error.message);
    });
}

update(selectedItem: any) {
  const modalRef = this.modalService.open(UpdateutilisateurComponent, {size: 'lg'});
  modalRef.componentInstance.utilisateur = selectedItem;
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
      this.utilisateur = this.utilisateur?.filter(m =>

           m.personne?.nom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.personne?.prenom?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.personne?.adresse?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.personne?.email?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.personne?.tel?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase()) ||
           m.login?.toLocaleLowerCase().match(this.searchInput.toLocaleLowerCase())

      );
  }

}

}
