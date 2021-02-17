import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from '../../model/user';





@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
   // @ts-ignore
  searchTerm: string ;
  pageActuelle = 1;
  nbreItemParPage = 4;
  // @ts-ignore
  nbrTotalItem: number;
  users: User[] = [];
  allUsers: any = [];
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getListUsers();
  }
  getListUsers(): any {
    return this.userService.getAllusers().subscribe((data: any) => {
      // this.users = data;
      // console.log(this.users);
      this.nbrTotalItem = data.length;
      this.users = data;
      this.allUsers = this.users;
      console.log( this.users);
    });
  }
  search(): void{
    let value: string;
    // @ts-ignore
    this.users = this.allUsers.filter(
      (us: User) => us.username.toLowerCase().includes(value)
    );
    this.nbrTotalItem =this.users.length;
  }
  editUse(id: number) {
    console.log(id);
    this.router.navigate(['/home/editUsers', id]);
  }



  deleteUse(id:number) {
    this.userService.deleteUser(id).subscribe(
      ()=>{
        this.getListUsers();
      }
    )

  }

  detailUser(id: number) {
    console.log(id);
    this.router.navigate(['/home/detailUsers', id]);
  }
}

