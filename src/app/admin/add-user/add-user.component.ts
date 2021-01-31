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
form: any
  image:any
  constructor(private formBuilder: FormBuilder, private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.form= <FormGroup>this.formBuilder.group(
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
    formData.append('firtname',this.form.value.firtname)
    formData.append('lastname',this.form.value.lastname)
    formData.append('email',this.form.value.email)
    formData.append('password',this.form.value.password)
    formData.append('photo',this.image)
    formData.append('username',this.form.value.username)
    formData.append('profils',this.form.value.profils)
    console.log(this.form.value)
    this.userService.postUser(formData).subscribe(
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
}
