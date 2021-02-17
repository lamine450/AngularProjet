import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../profil.service';
import {Profil} from '../../model/profil';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

// @ts-ignore
@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  // @ts-ignore
  profil: Profil;
  myGroup : FormGroup;
  // @ts-ignore
  id: number;
  // @ts-ignore
  title: string;
  constructor(
    private fb: FormBuilder,
    private proService: ProfilService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.myGroup = fb.group({
      libelle: ''
    });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        // @ts-ignore
        const id = +params.get('id');
        // @ts-ignore
        this.getProfil(id);
      }
    );
  }
  private getProfil(id: number) {
    if (id === 0) {
      this.title = 'Ajout';
      this.profil = {
        // @ts-ignore
        id: null,
        // @ts-ignore
        libelle: null
      };

    } else {
      this.title = 'Modification';
      this.proService.getProfil(id).subscribe(
        (data) => {
          this.profil = data;
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
    }

  }
  submit() {
    if (this.profil.id === null) {
      this.proService.addProfil(this.profil).subscribe(
        (data: Profil) => {
          console.log(data);
          this.router.navigate(['/home/listProfils']);
        },
        (error: any) => {
          console.log(error);
        }
      );
    } else {
      this.proService.editProfil(this.profil).subscribe(
        () => {
          this.router.navigate(['/home/listProfils']);
        }
      );
    }

  }
}
