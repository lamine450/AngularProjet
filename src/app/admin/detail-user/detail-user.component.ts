import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  // @ts-ignore
  user : User;
  id = '';
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params =>{
        // @ts-ignore
        this.id = +params.get('id');
        // @ts-ignore
        this.userService.getUser(this.id).subscribe(
            (response: User) => {// @ts-ignore
              this.user = response;},
          (error: any) => {console.log(error)}
        );
      }
    );
  }

}
