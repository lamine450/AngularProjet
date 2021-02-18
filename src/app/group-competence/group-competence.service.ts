import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupCompetenceService {
deleteGroupCompetenceService(id: number){
  throw new Error('Method not implemented./');
}
  baseUrl='//api/admin/grpecompetences';
  link = 'http://127.0.0.1:8000/api/admin/grpecompetences';
  constructor(private http: HttpClient) {
  }
  getAllgrpecompetences(): any {
    return this.http.get(this.baseUrl);
  }
  getGrpecompetence(id: number): Observable<GroupCompetenceService> {
    // @ts-ignore
    return this.http.get<Grpecompetence>('${this.baseUrl}/${id}')
  }
  addCompetence(data: any): any{
    return this.http.post('/api/admin/grpecompetences',data)
  }
  // @ts-ignore
  editGrpecompetence(grpecompetence: Grpecompetence) {
    return this.http.put(`http://127.0.0.1:8000/api/admin/grpecompetences/${grpecompetence.id}`, grpecompetence);
  }
  deleteGrpecompetence(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`)
  }
  addGrpecompetence(data: any):any {
    return this.http.post('/api/admin/grpecompetences' ,data)
  }
}
