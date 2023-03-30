import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { LocaliteService } from 'src/app/views/services/localite.service';

@Component({
  selector: 'app-updatelocalite',
  templateUrl: './updatelocalite.component.html',
  styleUrls: ['./updatelocalite.component.scss']
})
export class UpdatelocaliteComponent implements OnInit {

  form: FormGroup;
  localite:any;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private serviceLocalite: LocaliteService,
    private toastr:ToastrService) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      libelle: ['', [Validators.required]],
    });
}

ngOnInit(): void {
  
}
onUpdate(){

  this.localite.nom = this.form.controls['nom'].value;
  this.localite.libelle = this.form.controls['libelle'].value;
this.serviceLocalite.update(this.localite,this.localite.id).subscribe(data => {

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
