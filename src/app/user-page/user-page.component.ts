import { Component, OnInit, Input } from '@angular/core';
import { User, USER_MOCKS } from '../user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  @Input() returnedUser: User;

  constructor() { }

  ngOnInit() {
  }

}
