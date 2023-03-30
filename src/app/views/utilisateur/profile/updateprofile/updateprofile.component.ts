import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from 'src/app/views/services/profile.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.scss']
})
export class UpdateprofileComponent implements OnInit {

  form: FormGroup;
  profile:any;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private profileService: ProfileService,
    private toastr: ToastrService) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      libelle: ['', [Validators.required]],
    });
   }


  ngOnInit(): void {
  }


  onUpdate(){

    this.profile.nom = this.form.controls['nom'].value;
    this.profile.libelle = this.form.controls['libelle'].value;
    this.profileService.update(this.profile , this.profile.id ).subscribe(data => {

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
