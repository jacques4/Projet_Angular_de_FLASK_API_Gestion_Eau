import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MarqueService } from 'src/app/views/services/marque.service';

@Component({
  selector: 'app-updatemarque',
  templateUrl: './updatemarque.component.html',
  styleUrls: ['./updatemarque.component.scss']
})
export class UpdatemarqueComponent {

  form: FormGroup;
  marque:any;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private marqueService: MarqueService,
    private toastr:ToastrService) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
    });
}

ngOnInit(): void {
  
}
onUpdate(){

this.marque.nom = this.form.controls['nom'].value;
this.marqueService.update(this.marque,this.marque.id).subscribe(data => {

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
