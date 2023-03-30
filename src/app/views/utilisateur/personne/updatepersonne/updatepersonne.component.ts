import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { PersonneService } from 'src/app/views/services/personne.service';

@Component({
  selector: 'app-updatepersonne',
  templateUrl: './updatepersonne.component.html',
  styleUrls: ['./updatepersonne.component.scss']
})
export class UpdatepersonneComponent implements OnInit{

  form: FormGroup;
  personne: any;

  constructor(private builder: FormBuilder ,
    private activeModal: NgbActiveModal,
    private personneService : PersonneService,
    private toastr:ToastrService) { 

      this.form = this.builder.group({

        nom: ['', [Validators.required] ],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required]],
        tel : ['',Validators.required],
        adresse: ['', [Validators.required] ],
      });
  
    }

  ngOnInit(): void {
  }


  onUpdate(){

    this.personne.nom = this.form.controls['nom'].value;
    this.personne.prenom = this.form.controls['prenom'].value;
    this.personne.email = this.form.controls['email'].value;
    this.personne.tel = this.form.controls['tel'].value;
    this.personne.adresse = this.form.controls['adresse'].value;
  this.personneService.update(this.personne, this.personne.id).subscribe(data => {
  
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
