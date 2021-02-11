import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../../model/user';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  searchTerm: string | undefined;
  pageActuelle = 1;
  nbreItemParPage = 4;
  // @ts-ignore
  nbrTotalItem: number;
  users: any = [];
  allUsers: any = [];
  private nbrTotalItemSize: any;
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((data: User[]) => {
      this.nbrTotalItem = data.length;
      this.users = data;
      this.allUsers = this.users;
      console.log( this.users);
    });
  }
  search(value: string): void{
    // @ts-ignore
    this.users = this.allUsers.filter(
      (us: User) => us.username.toLowerCase().includes(value)
    );
    this.nbrTotalItemSize =this.users.length;
  }
}
