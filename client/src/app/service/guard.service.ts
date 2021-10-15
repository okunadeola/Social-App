import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements HttpInterceptor {
  
  constructor(public auth: AuthService) { }
  public token :any
  intercept(req :any, next:any){
    if(localStorage.getItem("profile")){
      let store :any= localStorage.getItem("profile")
      this.token  = JSON.parse(store).token
    }else{
      this.token ="auth"
    }
    let tokenizedReq = req.clone({
      setHeaders :{
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
