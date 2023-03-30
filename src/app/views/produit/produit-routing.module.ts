import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { ListmarqueComponent } from './marques/listmarque/listmarque.component';
import { ListproduitComponent } from './produit/listproduit/listproduit.component';

const routes: Routes = [

  {path: 'list-produit', component : ListproduitComponent ,canActivate:[AuthGuard]},
  {path: 'list-marque', component : ListmarqueComponent ,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRoutingModule { }
