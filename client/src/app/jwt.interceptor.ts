import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(localStorage.getItem('profile')!== null){ 
      let store :any= localStorage.getItem('profile')
      let token  = JSON.parse(store)
      console.log(token.token)
      const API_KEY = token.token
      return next.handle(request.clone({setHeaders:{Authorization:`${token.token}`}}));
    }
    return next.handle(request);
  }
}
