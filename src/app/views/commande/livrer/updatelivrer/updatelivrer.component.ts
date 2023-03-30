import { ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Commande } from 'src/app/views/models/commande';
import { Utilisateur } from 'src/app/views/models/utilisateur';
import { CommandeService } from 'src/app/views/services/commande.service';
import { LivrerService } from 'src/app/views/services/livrer.service';
import { UtilisateurService } from 'src/app/views/services/utilisateur.service';

@Component({
  selector: 'app-updatelivrer',
  templateUrl: './updatelivrer.component.html',
  styleUrls: ['./updatelivrer.component.scss']
})
export class UpdatelivrerComponent {

  listecommandes: Array<Commande> = new Array<Commande>();
  listeutilisateur?: Array<Utilisateur> =  new Array<Utilisateur>();
  form: FormGroup;
  livrer:any

  constructor(private builder: FormBuilder ,
    private activeModal: NgbActiveModal,
    private commandeService: CommandeService,
    private livrerService:LivrerService,
    private cdr: ChangeDetectorRef,
    private utilisateurService: UtilisateurService,
    private toastr: ToastrService) { 

      this.form = this.builder.group({

        commande: ['', [Validators.required] ],
        quantite: ['', [Validators.required]],
        date: ['', [Validators.required]],
        status: ['', [Validators.required]],
        utilisateur: ['', [Validators.required]],
       
      });
      this.cdr.detectChanges;
    }

  ngOnInit(): void {

    this.commandeService.getAll().subscribe(data => {
      this.listecommandes = data.Commande;
      console.log('chargement de commande');
      console.table(this.listecommandes);
    });

    this.utilisateurService.getAll().subscribe(data => {
      this.listeutilisateur = data.utilisateurs;
      console.log('chargement du utilisateur');
      console.table(this.listeutilisateur);
    });

    //this.form.controls['commande'].setValue(this.livrer.commande.client.id);
    this.form.controls['commande'].setValue(this.livrer.commande.id);
    this.form.controls['utilisateur'].setValue(this.livrer.utilisateur.id);
  }

  controlOnChange(event : any){
    if(event.target.checked){
      this.form.controls['status'].setValue(event.target.checked);
    } else {
      console.log(event.target.checked)
      this.form.controls['status'].setValue(event.target.checked);
    }
  }
 
  onUpdate(){

    this.livrer.id_utilisateur = this.listeutilisateur?.find(item => item.id == parseInt( this.form.controls['utilisateur'].value))?.id;
    this.livrer.date = this.form.controls['date'].value;
    this.livrer.status = this.form.controls['status'].value;
    this.livrer.quantite = this.form.controls['quantite'].value;
    this.livrer.id_commande = this.listecommandes?.find(item => item.id == parseInt( this.form.controls['commande'].value))?.id;
    this.livrerService.update(this.livrer, this.livrer.id).subscribe(data => {
    
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
