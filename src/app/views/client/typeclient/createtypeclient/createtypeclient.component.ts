import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TypeClient } from 'src/app/views/models/typeclient';
import { TypeclientService } from 'src/app/views/services/typeclient.service';

@Component({
  selector: 'app-createtypeclient',
  templateUrl: './createtypeclient.component.html',
  styleUrls: ['./createtypeclient.component.scss']
})
export class CreatetypeclientComponent implements OnInit {
  typeClient?:TypeClient
  form: FormGroup;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private typeClientService: TypeclientService,
    private toastr:ToastrService) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      libelle: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  onCreate()
  {
    this.typeClient = new TypeClient();
    this.typeClient.nom = this.form.controls['nom'].value;
    this.typeClient.libelle= this.form.controls['libelle'].value;
    console.log(this.typeClient);
    this.typeClientService.create(this.typeClient).subscribe(data => {
     
      if(data.success === true){

        this.activeModal.close(true);
        this.toastr.info("Enregistrer", "OK")
       }
       else{
        this.toastr.error("Donnee erronee", "Information")
       }

    });

  }

  onClose()
  {
this.activeModal.close();
  }

}
