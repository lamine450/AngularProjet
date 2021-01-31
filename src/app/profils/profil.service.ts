import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  constructor(private http: HttpClient) { }
  getAllprofils(): any{
    return this.http.get('/api/admin/profils');
  }
  addProfil(data: any): any {
    return this.http.post('/api/admin/profils',data)
  }
}
