import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-grp-competence',
  templateUrl: './list-grp-competence.component.html',
  styleUrls: ['./list-grp-competence.component.css']
})
export class ListGrpCompetenceComponent implements OnInit {
  groupedeCompetence: GroupeDeCompetences[] = [];
  constructor(private groupCompetenceService : GroupetenceService,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllgrpecompetences();
  }
  getAllgrpecompetences(): any{
   return this.grpecompetencesService.getGroupCompetence().subscribe((data: any) => {
     this.grpecompetences = data;
     console.log(this.grpecompetences)
     }
   )
  }

}
