import { Component, OnInit ,ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/views/models/client';
import { TypeClient } from 'src/app/views/models/typeclient';
import { ClientService } from 'src/app/views/services/client.service';
import { TypeclientService } from 'src/app/views/services/typeclient.service';

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.scss']
})
export class UpdateclientComponent implements OnInit{

  listeTypeClient: Array<TypeClient> = new Array<TypeClient>();
  form: FormGroup;
  client: any;
  isHiden = false;
  isHiden2 = false;

  constructor(private builder: FormBuilder ,
    private activeModal: NgbActiveModal,
    private typeClientService: TypeclientService,
    private clientService: ClientService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService) { 

      this.form = this.builder.group({

        nom: ['', [Validators.required] ],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required]],
        tel : ['',Validators.required],
        adresse: ['', [Validators.required] ],
        typeClient: ['',[Validators.required]],
        nif: ['', [Validators.required]],
        numrccm: ['',[Validators.required]],
      });
      this.cdr.detectChanges;
    }

  ngOnInit(): void {

    this.typeClientService.getAll().subscribe(data => {
      this.listeTypeClient = data.typeclient;
      console.log('chargement de type client');
      console.table(this.listeTypeClient);
    });

    this.form.controls['typeClient'].setValue(this.client.typeclient.id);

    if(this.client.typeclient?.nom === 'societe'){
      this.isHiden = true;
      this.form.controls['prenom'].disable();

 }
 else if(this.client.typeclient?.nom === 'personne'){

   this.isHiden2 = true;
   this.form.controls['numrccm'].disable();
   this.form.controls['nif'].disable();

 }
  else

  {
   this.isHiden = false;
   this.isHiden2 = false;
  }
  }

  onSelectClient(){
    this.client = new Client();

    this.client.typeclient = this.listeTypeClient?.find(item => item.id== this.form.controls['typeClient'].value);
     if(this.client.typeclient?.nom === 'societe'){
          this.isHiden = true;
          this.form.controls['prenom'].disable();

     }
     else if(this.client.typeclient?.nom === 'personne'){

       this.isHiden2 = true;
       this.form.controls['numrccm'].disable();
       this.form.controls['nif'].disable();

     }
      else

      {
       this.isHiden = false;
       this.isHiden2 = false;
      }

  }


  onUpdate(){

    this.client.nom = this.form.controls['nom'].value;
    this.client.prenom = this.form.controls['prenom'].value;
    this.client.nif = this.form.controls['nif'].value;
    this.client.numrccm = this.form.controls['numrccm'].value;
    this.client.email = this.form.controls['email'].value;
    this.client.tel = this.form.controls['tel'].value;
    this.client.adresse = this.form.controls['adresse'].value;
    this.client.id_typeclient = this.listeTypeClient?.find(item => item.id == parseInt( this.form.controls['typeClient'].value))?.id;
    this.clientService.update(this.client, this.client.id).subscribe(data => {
    
   if(data.Sucess ===true){

    this.activeModal.close(true);
    this.toastr.warning("Mis a jour","OK");
   }
   else{
    this.toastr.error("Mis a jour echouee ","Information");
   }
  
  });


  }

  onClose(){

    this.activeModal.close();
  }
}
