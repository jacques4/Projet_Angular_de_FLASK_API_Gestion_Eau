import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Localite } from '../models/localite';

const API_URL = environment.apiUrl + '/localites/'

@Injectable({
  providedIn: 'root'
})
export class LocaliteService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get( API_URL );
  }


  public create(localite : Localite): Observable<any> {
    return this.http.post(API_URL, localite);
  }

  public update(localite : Localite, id: number): Observable<any> {
    return this.http.patch(API_URL + `${id}`, localite);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
