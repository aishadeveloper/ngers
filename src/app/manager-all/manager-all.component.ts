import { Component, OnInit, Input } from '@angular/core';
import { User, USER_MOCKS } from '../user';

@Component({
  selector: 'app-manager-all',
  templateUrl: './manager-all.component.html',
  styleUrls: ['./manager-all.component.css']
})
export class ManagerAllComponent implements OnInit {

  @Input() tempBind: User = new User();

  constructor() { }

  ngOnInit() {
  }

}
