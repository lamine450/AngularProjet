import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUser(): any {
    return this.http.get('/api/admin/users');
  }

  postUser(data: any): any {
    return this.http.post('/api/admin/users', data);

  }
}
