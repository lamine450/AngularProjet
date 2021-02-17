import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import {Profil} from '../../model/profil';
import {Router} from '@angular/router';


@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
  profils: Profil[] = [];
  constructor(
    private profilService: ProfilService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListProfils();
  }
  getListProfils(): any {
     return this.profilService.getAllprofils().subscribe((profils: any) => {
      this.profils = profils;
      console.log(this.profils);
    });
  }
  editProfil(id: number) {
    console.log(id);
    this.router.navigate(['/home/editProfils', id]);
  }
  deleteProfil(id: number) {
    this.profilService.deleteProfil(id).subscribe(
      () => {
        this.getListProfils();
      }
    );
  }

}
