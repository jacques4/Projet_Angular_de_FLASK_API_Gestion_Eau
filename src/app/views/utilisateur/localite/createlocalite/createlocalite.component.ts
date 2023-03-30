import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Localite } from 'src/app/views/models/localite';
import { LocaliteService } from 'src/app/views/services/localite.service';

@Component({
  selector: 'app-createlocalite',
  templateUrl: './createlocalite.component.html',
  styleUrls: ['./createlocalite.component.scss']
})
export class CreatelocaliteComponent implements OnInit{
  localite?: Localite;
  form: FormGroup;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private localiteService: LocaliteService,
    private toastr:ToastrService
    ) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      libelle: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  onCreate()
  {
    this.localite = new Localite();
    this.localite.nom = this.form.controls['nom'].value;
    this.localite.libelle= this.form.controls['libelle'].value;
    console.log(this.localite);
    this.localiteService.create(this.localite).subscribe(data => {

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
