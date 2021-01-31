import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  users: any = [];
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUser().subscribe((user: any) => {
      this.users = user;
      console.log( this.users);
    });
  }

}
