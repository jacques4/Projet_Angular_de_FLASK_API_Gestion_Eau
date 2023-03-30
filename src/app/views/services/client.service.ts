import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../src/environments/environment';
import {Observable} from 'rxjs';
import {Client} from "../models/client";

const API_URL = environment.apiUrl + '/clients/';           // URL to REST API

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }


    getAll(): Observable<any> {
      return this.http.get(API_URL);
    }
    
    public create(client: Client): Observable<any> {
      return this.http.post(API_URL, client);
    }
  
    public update(client: Client , id: number): Observable<any> {
      return this.http.patch(API_URL + `${id}`, client);
    }
  
    public delete(id: any): Observable<any> {
      return this.http.delete(API_URL  + id);
    }

    getLocation():Promise<any>{
      return new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(resp=>{
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
        })
      })

    }
}
