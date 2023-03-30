import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { TypeclientService } from 'src/app/views/services/typeclient.service';

@Component({
  selector: 'app-updatetypeclient',
  templateUrl: './updatetypeclient.component.html',
  styleUrls: ['./updatetypeclient.component.scss']
})
export class UpdatetypeclientComponent implements OnInit{

  form: FormGroup;
  typeclient:any;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private typeclientService: TypeclientService,
    private toastr:ToastrService) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      libelle: ['', [Validators.required]],
    });
   }


  ngOnInit(): void {
  }


  onUpdate(){

    this.typeclient.nom = this.form.controls['nom'].value;
    this.typeclient.libelle = this.form.controls['libelle'].value;
  this.typeclientService.update(this.typeclient, this.typeclient.id).subscribe(data => {

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
