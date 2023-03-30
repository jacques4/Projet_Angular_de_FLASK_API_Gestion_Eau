import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { UpdatecommandeComponent } from './commande/updatecommande/updatecommande.component';
import { CreatecommandeComponent } from './commande/createcommande/createcommande.component';
import { DetailcommandeComponent } from './commande/detailcommande/detailcommande.component';
import { ListcommandeComponent } from './commande/listcommande/listcommande.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LivrerComponent } from './livrer/livrer/livrer.component';
import { CreatelivrerComponent } from './livrer/createlivrer/createlivrer.component';
import { UpdatelivrerComponent } from './livrer/updatelivrer/updatelivrer.component';
import { DetaillivrerComponent } from './livrer/detaillivrer/detaillivrer.component';



@NgModule({
  declarations: [
    UpdatecommandeComponent,
    CreatecommandeComponent,
    DetailcommandeComponent,
    ListcommandeComponent,
    LivrerComponent,
    CreatelivrerComponent,
    UpdatelivrerComponent,
    DetaillivrerComponent
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class CommandeModule { }
