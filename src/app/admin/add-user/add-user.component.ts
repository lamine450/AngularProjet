import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  image:any
  lastname= '';
  firtname= '';
  password= '';
  username= '';
  email= '';
  // @ts-ignore
  addUserForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.addUserForm= <FormGroup>this.formBuilder.group(
      {
        firtname:['',Validators.required],
        lastname:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        photo:['',Validators.required],
        username:['',Validators.required],
        profils:['',Validators.required],
      }
    )
  }

  onSubmit() {
    let formData = new FormData();
    formData.append('firtname',this.addUserForm.value.firtname)
    formData.append('lastname',this.addUserForm.value.lastname)
    formData.append('email',this.addUserForm.value.email)
    formData.append('password',this.addUserForm.value.password)
    formData.append('photo',this.image)
    formData.append('username',this.addUserForm.value.username)
    formData.append('profils',this.addUserForm.value.profils)
    console.log(this.addUserForm.value)
    this.userService.addUser(formData).subscribe(
      (success:any)=>{
        console.log(success)
        this.router.navigate(['/listUsers'])
      }
    )
  }

  recupererImage(event: any) {
    this.image= event.files[0]
    // console.log(this.image)
  }

  isValidInput(fieldName: string | number): boolean {
    return this.addUserForm.controls[fieldName].invalid &&
      (this.addUserForm.controls[fieldName].dirty || this.addUserForm.controls[fieldName].touched);

  }
}
