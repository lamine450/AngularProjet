import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfilService} from '../profil.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  form: any
  Profil= '';
  // @ts-ignore
  addprofilForm: FormGroup;
  addProfilForm= '';
  constructor(private formBuilder: FormBuilder, private profilService: ProfilService, private router:Router) { }

  ngOnInit(): void {
    this.form=<FormGroup> this.formBuilder.group(
      {
        libelle:['' , Validators.required],
      }
    )
  }
  onSubmit(){
this.profilService.addProfil(this.form.value).subscribe(
  (success:any)=>{
  console.log(success)
  this.router.navigate(['/home/listProfils'])
})
  }

  isValidInput(fieldName: string | number): boolean {
    return this.addprofilForm.controls[fieldName].invalid &&
      (this.addprofilForm.controls[fieldName].dirty || this.addprofilForm.controls[fieldName].touched);

  }
}
