import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Profile } from 'src/app/views/models/profile';
import { ProfileService } from 'src/app/views/services/profile.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.scss']
})
export class CreateprofileComponent implements OnInit {

  profile?:Profile
  form: FormGroup;
  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private profileService: ProfileService,
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

      this.profile = new Profile();
      this.profile.nom = this.form.controls['nom'].value;
      this.profile.libelle= this.form.controls['libelle'].value;
      console.log(this.profile);
      this.profileService.create(this.profile).subscribe(data => {

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
