import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const API_URL = environment.apiUrl + '/login/dashboard'

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  authorization(data:any):Observable<any>{
    return this.http.get(API_URL,data);

  }

  IsLoggedIn(){
    return localStorage.getItem('token') !=null;
  }

  GetToken(){
    return localStorage.getItem('token')||'';
  }

}
