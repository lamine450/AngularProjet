import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  deleteUsers(id: number) {
      throw new Error('Method not implemented.');
  }
  baseUrl='/api/admin/users';
  link = 'http://127.0.0.1:8000/api/admin/users';
  constructor(private http: HttpClient) {
  }
  getAllusers(): any{
    return this.http.get(this.baseUrl);
  }
  getUser(id: number): Observable<User> {
    // @ts-ignore
    return this.http.get<user>(`${this.baseUrl}/${id}`)
  }
  addProfil(data: any): any {
    return this.http.post('/api/admin/users',data)
  }
  editUser(user: User) {
    return this.http.put(`http://127.0.0.1:8000/api/admin/users/${user.id}`, user);
  }
  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }

  addUser(data: any):any {
    return this.http.post('/api/admin/users' ,data)
  }
}
