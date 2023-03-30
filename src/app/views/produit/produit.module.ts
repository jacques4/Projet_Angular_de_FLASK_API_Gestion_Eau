import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProduitRoutingModule } from './produit-routing.module';
import { CreateproduitComponent } from './produit/createproduit/createproduit.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';
import { UpdateproduitComponent } from './produit/updateproduit/updateproduit.component';
import { DetailproduitComponent } from './produit/detailproduit/detailproduit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatemarqueComponent } from './marques/createmarque/createmarque.component';
import { UpdatemarqueComponent } from './marques/updatemarque/updatemarque.component';
import { ListmarqueComponent } from './marques/listmarque/listmarque.component';



@NgModule({
  declarations: [
    CreateproduitComponent,
    ListproduitComponent,
    UpdateproduitComponent,
    DetailproduitComponent,
    CreatemarqueComponent,
    UpdatemarqueComponent,
    ListmarqueComponent,
  ],
  imports: [
    CommonModule,
    ProduitRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ProduitModule { }
