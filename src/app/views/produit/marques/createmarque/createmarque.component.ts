import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Marque } from 'src/app/views/models/marque';
import { MarqueService } from 'src/app/views/services/marque.service';

@Component({
  selector: 'app-createmarque',
  templateUrl: './createmarque.component.html',
  styleUrls: ['./createmarque.component.scss']
})
export class CreatemarqueComponent {

  marque?: Marque;
  form: FormGroup;

  constructor(private activeModal: NgbActiveModal,
    private builder: FormBuilder,
    private marqueService: MarqueService,
    private toastr:ToastrService
    ) {

    this.form = this.builder.group({

      nom: ['', [Validators.required] ],
      
    });
   }

  ngOnInit(): void {
  }

  onCreate()
  {
    this.marque = new Marque();
    this.marque.nom = this.form.controls['nom'].value;

    console.log(this.marque);
    this.marqueService.create(this.marque).subscribe(data => {

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
