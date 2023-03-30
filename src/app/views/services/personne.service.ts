import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Personne } from '../models/personne';

const API_URL = environment.apiUrl + '/personnes/'

@Injectable({
  providedIn: 'root'
})
export class PersonneService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get( API_URL );
  }


  public create(personne : Personne): Observable<any> {
    return this.http.post(API_URL, personne);
  }

  public update(personne : Personne , id: number): Observable<any> {
    return this.http.patch(API_URL + `${id}`, personne);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
