import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/login/'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.post(API_URL,data);
  }

  IsLoggedIn(){
    return localStorage.getItem('token') !=null;
  }

  GetToken(){
    return localStorage.getItem('token')||'';
  }

  logout(){
    return localStorage.removeItem('token') !=null;
  }

  logout_s(){
    return sessionStorage.removeItem('user') !=null;
  }


out(){

// Set the token in local storage
const access_token = localStorage.getItem('token')||'';
localStorage.setItem('token', access_token);

// Remove the token from local storage after 5 minutes
const timeoutDuration = 300000; // 5 minutes
setTimeout(() => {
  localStorage.removeItem('token') , sessionStorage.removeItem('user');
}, timeoutDuration);

}

}
