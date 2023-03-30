import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Localite } from 'src/app/views/models/localite';

@Component({
  selector: 'app-detaillocalite',
  templateUrl: './detaillocalite.component.html',
  styleUrls: ['./detaillocalite.component.scss']
})
export class DetaillocaliteComponent {

  localite?: Localite;
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  onClose(){

    this.activeModal.close();
  }

}
