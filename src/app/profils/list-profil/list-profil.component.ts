import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {ProfilService} from '../profil.service';


@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
  profils: any = [];
  constructor( private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.getAllprofils().subscribe((profils: any) => {
      this.profils = profils;
      console.log(this.profils);
    });
  }

}
