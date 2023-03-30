import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/profiles/'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


  getAll(): Observable<any>{
    return this.http.get( API_URL );
  }


  public create(profile: Profile): Observable<any> {
    return this.http.post(API_URL, profile);
  }

  public update(profile: Profile, id: number): Observable<any> {
    return this.http.patch(API_URL  + `${id}`, profile);
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(API_URL  + id);
  }
}
