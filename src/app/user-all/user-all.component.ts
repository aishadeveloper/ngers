import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, USER_MOCKS } from '../user';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.css']
})
export class UserAllComponent implements OnInit {

  users: User[] = USER_MOCKS;
  user : User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.populateUsers();
  }

  async populateUsers(){
    this.users = await this.userService.promiseGetAllUsers();
  }

}
