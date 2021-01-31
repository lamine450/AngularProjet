import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor() {}

  // @ts-ignore
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url !== 'https://127.0.0.1:8000/api/login') {
      const token = localStorage.getItem('token');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          Accept: 'Application/json',
        }
      });
      return next.handle(request);
    }
  }
}
