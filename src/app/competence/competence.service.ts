import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }
  getAllcompetence():any{
    return this.http.get('/api/admin/competences');
  }
}
