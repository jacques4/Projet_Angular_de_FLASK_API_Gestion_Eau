import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produit } from '../models/produit';

const API_URL = environment.apiUrl + '/produits/'; 

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }


    getAll(): Observable<any> {
      return this.http.get(API_URL);
    }
    
    public create(produit: Produit): Observable<any> {
      return this.http.post(API_URL, produit);
    }
  
    public update(produit: Produit ,id: number): Observable<any> {
      return this.http.patch(API_URL + `${id}` , produit);
    }
  
    public delete(id: any): Observable<any> {
      return this.http.delete(API_URL  + id);
    }
}
