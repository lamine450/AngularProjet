import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profil} from '../model/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  deleteProfils(id: number) {
    throw new Error('Method not implemented.');
  }

  BaseUrl = '/api/admin/profils';
  link = 'http://127.0.0.1:8000/api/admin/profils';
  constructor(private http: HttpClient) { }
  getAllprofils(): any{
    return this.http.get(this.BaseUrl);
  }
  getProfil(id: number): Observable<Profil> {
    return this.http.get<Profil>(`${this.BaseUrl}/${id}`)
  }
  addProfil(data: any): any {
    return this.http.post('/api/admin/profils',data)
  }
  editProfil(profil: Profil) {
    return this.http.put(`http://127.0.0.1:8000/api/admin/profils/${profil.id}`, profil);
  }
  deleteProfil(id: number): Observable<void> {
    return this.http.delete<void>(`${this.BaseUrl}/${id}`)
  }
}
