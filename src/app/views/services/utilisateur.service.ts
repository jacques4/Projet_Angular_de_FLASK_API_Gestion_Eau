import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur';

const API_URL = environment.apiUrl + '/utilisateurs/'

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any>{
    return this.http.get( API_URL );
  }


  public create(utilisateur: Utilisateur): Observable<any> {
    return this.http.post(API_URL, utilisateur);
  }

  public update(utilisateur: Utilisateur ,id: number): Observable<any> {
    return this.http.patch(API_URL + `${id}`, utilisateur);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
