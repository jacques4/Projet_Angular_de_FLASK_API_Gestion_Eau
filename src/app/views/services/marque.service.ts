import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Marque} from "../models/marque";


const API_URL = environment.apiUrl + '/marques/';           // URL to REST API

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  constructor(private http:HttpClient) { }


    getAll(): Observable<any> {
      return this.http.get(API_URL);
    }
    
    public create(marque: Marque): Observable<any> {
      return this.http.post(API_URL, marque);
    }
  
    public update(marque: Marque , id: number): Observable<any> {
      return this.http.patch(API_URL + `${id}`, marque);
    }
  
    public delete(id: any): Observable<any> {
      return this.http.delete(API_URL  + id);
    }

   
}
