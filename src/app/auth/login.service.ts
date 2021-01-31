import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  link = 'http://127.0.0.1:8000/api/login';
  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.httpClient.post(this.link, {password, username});
  }
}
