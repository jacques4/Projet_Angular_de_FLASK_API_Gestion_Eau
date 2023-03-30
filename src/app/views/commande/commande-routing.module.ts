import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth.guard';
import { ListcommandeComponent } from './commande/listcommande/listcommande.component';
import { LivrerComponent } from './livrer/livrer/livrer.component';

const routes: Routes = [
  {path: 'list-commande', component :ListcommandeComponent , canActivate:[AuthGuard]},
  {path: 'list-livraison', component :LivrerComponent , canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeRoutingModule { }
