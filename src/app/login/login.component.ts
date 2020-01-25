import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { User, USER_MOCKS } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  user: User = USER_MOCKS[0];

  users: User[] = USER_MOCKS;

  returnedUser: User = USER_MOCKS[1];

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  async login() {
    this.returnedUser = await this.userService.promiseGetUser(this.user);

    if (this.returnedUser.id > 0) {
      this.router.navigate([`/userdetail/${this.returnedUser.id}`]);      
    }
  }


  showEmployee() {
    this.router.navigate(['/profile']);
  }

  showManager() {
    this.router.navigate(['/manager']);
  }


}
