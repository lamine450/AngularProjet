import { Component, OnInit } from '@angular/core';
import {CompetenceService} from '../competence.service';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {
  competence: any=[];
  constructor( private competenceService: CompetenceService) { }

  ngOnInit(): void {
    this.competenceService.getAllcompetence().subscribe((competence: any) =>{
      this.competence=competence;
      console.log( this.competence);
    });
  }

}
