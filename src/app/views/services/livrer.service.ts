import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livrer } from '../models/livrer';

const API_URL = environment.apiUrl + '/livrers/';

@Injectable({
  providedIn: 'root'
})
export class LivrerService {

  constructor(private http:HttpClient) { }


  getAll(): Observable<any> {
    return this.http.get(API_URL);
  }
  
  public create(livrer: Livrer): Observable<any> {
    return this.http.post(API_URL, livrer);
  }

  public update(livrer: Livrer , id: number): Observable<any> {
    return this.http.patch(API_URL + `${id}`, livrer);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
