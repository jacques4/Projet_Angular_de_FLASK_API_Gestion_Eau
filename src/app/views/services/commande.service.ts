import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commande } from '../models/commande';

const API_URL = environment.apiUrl + '/commandes/'; // URL to REST API

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http:HttpClient) { }


    getAll(): Observable<any> {
      return this.http.get(API_URL);
    }
    
    public create(commande: Commande): Observable<any> {
      return this.http.post(API_URL, commande);
    }
  
    public update(commande: Commande , id: number): Observable<any> {
      return this.http.patch(API_URL + `${id}`, commande);
    }
  
    public delete(id: any): Observable<any> {
      return this.http.delete(API_URL  + id);
    }
}
