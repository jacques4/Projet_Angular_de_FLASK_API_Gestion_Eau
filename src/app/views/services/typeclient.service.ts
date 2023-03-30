import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeClient } from '../models/typeclient';

const API_URL = environment.apiUrl + '/typeclients/'

@Injectable({
  providedIn: 'root'
})
export class TypeclientService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get( API_URL );
  }


  public create(typeclient: TypeClient): Observable<any> {
    return this.http.post(API_URL, typeclient);
  }

  public update(typeclient: TypeClient , id: number): Observable<any> {
    return this.http.patch(API_URL + `${id}` , typeclient);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
