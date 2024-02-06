import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../../services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let auth=inject(AuthService)

    console.log("Interceptor called ",request);
    request=request.clone({
      setHeaders:{
        Authorization: `Bearer ${auth.getToken()}`
      }
    })
    return next.handle(request);
  }
}
