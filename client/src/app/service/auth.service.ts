import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  public url = 'http://localhost:7000/auth'
  public data = new BehaviorSubject({})

  
  signup(signupData :any){
    return this.http.post(`${this.url}/signup`, signupData)
  }
  signin(signinData :any){
    return this.http.post(`${this.url}/signin`, signinData)
  }
  changeProfile(profileData :any, id: any){
    return this.http.post(`${this.url}/${id}/changeProfile`, profileData)
  }

  getToken(){
    return this.data
  }
}
