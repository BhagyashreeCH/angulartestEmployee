import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorImplementationService implements HttpInterceptor {
  constructor() { }
  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    console.log("interceptor service call started");
    console.log("url : ", request.url);
    const token = "My key"
    const authReq = request.clone({setHeaders: {Authorization: token}});
    
    return next.handle(authReq);
  }
}
