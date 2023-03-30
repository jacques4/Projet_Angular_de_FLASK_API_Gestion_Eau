import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Livrer } from 'src/app/views/models/livrer';

@Component({
  selector: 'app-detaillivrer',
  templateUrl: './detaillivrer.component.html',
  styleUrls: ['./detaillivrer.component.scss']
})
export class DetaillivrerComponent {

  livrer?: Livrer;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.livrer)
  }
  
  onClose(){
    this.activeModal.close();
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('imprimer')?.innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin?.document.open();
    popupWin?.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          .div{
          text-align: center;
          font-size: large;
           }
          </style>
        </head>
    <body onload="window.print();window.close()" >${printContents}</body>
      </html>`
    );
    popupWin?.document.close();
}
}
