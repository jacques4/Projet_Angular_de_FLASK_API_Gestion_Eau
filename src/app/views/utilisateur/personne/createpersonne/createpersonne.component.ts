import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Personne } from 'src/app/views/models/personne';
import { PersonneService } from 'src/app/views/services/personne.service';

@Component({
  selector: 'app-createpersonne',
  templateUrl: './createpersonne.component.html',
  styleUrls: ['./createpersonne.component.scss']
})
export class CreatepersonneComponent implements OnInit{

  form: FormGroup;

  personne?: Personne;
  listeProfile: Array<Personne> = new Array<Personne>();
 
  constructor(private activeModal: NgbActiveModal,
    private builder:FormBuilder,
    private personneService:PersonneService,
    private toastr: ToastrService) { 

    this.form = this.builder.group({


      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required]],
      tel: ['', [Validators.required] ],
      adresse: ['', [Validators.required]],

    });

  }


  ngOnInit(): void {


  }

  onCreate(){

    this.personne = new Personne();

    this.personne.nom = this.form.controls['nom'].value;
    this.personne.prenom = this.form.controls['prenom'].value;
    this.personne.adresse = this.form.controls['adresse'].value;
    this.personne.tel = this.form.controls['tel'].value;
    this.personne.email = this.form.controls['email'].value;
    console.log(this.personne);

    this.personneService.create(this.personne).subscribe(data => {

      if(data.success === true){

        this.activeModal.close(true);
        this.toastr.info("Enregistrer", "OK")
       }
       else{
        this.toastr.error("Donnee erronee", "Information")
       }
      
    });
  }

  onClose(){
    this.activeModal.close();
  }

}
