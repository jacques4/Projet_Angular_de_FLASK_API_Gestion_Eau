import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListclientComponent } from './client/listclient/listclient.component';
import { ListtypeclientComponent } from './typeclient/listtypeclient/listtypeclient.component';
import {AuthGuard} from 'src/app/views/shared/auth.guard'
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [

  {path: 'list-client', component :ListclientComponent, canActivate:[AuthGuard]},
  {path: 'list-type-client', component : ListtypeclientComponent ,canActivate:[AuthGuard]},
  {path: 'maps', component : MapsComponent ,canActivate:[AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
