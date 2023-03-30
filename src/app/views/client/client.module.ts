import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ListclientComponent } from './client/listclient/listclient.component';
import { CreateclientComponent } from './client/createclient/createclient.component';
import { UpdateclientComponent } from './client/updateclient/updateclient.component';
import { DetailclientComponent } from './client/detailclient/detailclient.component';
import { ListtypeclientComponent } from './typeclient/listtypeclient/listtypeclient.component';
import { CreatetypeclientComponent } from './typeclient/createtypeclient/createtypeclient.component';
import { DetailtypeclientComponent } from './typeclient/detailtypeclient/detailtypeclient.component';
import { UpdatetypeclientComponent } from './typeclient/updatetypeclient/updatetypeclient.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapsComponent } from './maps/maps.component';
import { DeletetypeclientComponent } from './typeclient/deletetypeclient/deletetypeclient.component';


@NgModule({
  declarations: [
    ListclientComponent,
        CreateclientComponent,
        UpdateclientComponent,
        DetailclientComponent,
        ListtypeclientComponent,
        CreatetypeclientComponent,
        DetailtypeclientComponent,
        UpdatetypeclientComponent,
        MapsComponent,
        DeletetypeclientComponent,
        
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GoogleMapsModule,
    
    
  ]
})
export class ClientModule { }
