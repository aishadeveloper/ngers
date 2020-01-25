import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User, USER_MOCKS } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Expense } from '../expense';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent implements OnInit {

  // @Output() click = new EventEmitter();

  currentUser: User = new User;

  tempBind: User = new User;

  tempUser: User = null;

  // tempBind: User = this.getUserId2();

  tempUserId: number = 0;
  testMessage: string = "this is a test";

  // tempUser: User = null;

  tempExpense: Expense = new Expense();

  managerTempId: number;
  singleId: number;

  expenses: Expense[] = [];
  users: User[] = [];

  currentUserExpenses: Expense[] = [];
  userid: number = 0;
  showPhotoPreview = false;
  showReimbursementRequest = false;
  showUserDetails = false;
  showProfile = false;
  editProfile = false;
  mainNavbar = false;
  showManagerPage = false;
  managerShowAllExpenses = false;
  pendingApprovalExpenses = false;
  pendingUserExpenses = false;
  viewAllEmployees = false;
  resolvedUserExpenses = false;
  resolvedAllExpenses = false;
  viewOneEmployeeRequests = false;


  expense: Expense = {
    id: 0,
    title: null,
    expenseDate: null,
    expenseAmount: null,
    userId: null,
    managerId: null,
    decision: null,
    imageLink: null
    // image: null
  };

  expenseFormTemplate = new FormGroup({

  })

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

    if (this.route.snapshot.paramMap.get('id') !== null) {
      this.getUserId2();
      this.tempUserId = +this.route.snapshot.paramMap.get('id');
      console.log("This is from ngOnInit: " + this.tempUserId);
      this.managerTempId = this.tempUserId;
      console.log("This is from ngOnInit2: " + this.managerTempId);
    }

    // this.populateExpenses();
    // this.populateUsers();

  }

  loadUserId(): void {
    for (let i = 0; i < this.users.length; i++) {
      this.currentUser = this.users[i];
      console.log('fsfdsfdfas');
      if (this.currentUser.id === this.tempUserId) {
        console.log(this.currentUser.id, this.currentUser.lastName, this.currentUser.userName);

        break;
      }
    }
    this.showUserDetails = true;
    this.mainNavbar = false;
  }

  saveExpense(): void {
    this.userService.sendExpense(this.expense);
    this.resetExpenseForm();
  }

  newExpense(): void {
    this.hideAllPages();
    this.showReimbursementRequest = true;
    this.showUserDetails = true;
    this.expense.userId = +this.route.snapshot.paramMap.get('id');
  }

  resetExpenseForm(): void {
    this.expense.title = '';
    this.expense.expenseDate = '';
    this.expense.expenseAmount = null;
    this.expense.imageLink = '';
  }

  viewProfile(): void {
    this.hideAllPages();
    this.showUserDetails = true;
    this.showProfile = true;
  }

  updateProfile(): void {
    this.hideAllPages();
    this.showUserDetails = true;
    this.editProfile = true;
  }

  employeeHomepage(): void {
    this.hideAllPages();
    this.showUserDetails = true;   
  }

  loginButton(): void {
    this.hideAllPages(); 
    this.router.navigate(['/login']);
  }

  async populatePendingExpenses() {
    console.log("This is from Populate Expense" + this.managerTempId);
    this.expenses = await this.userService.promiseGetAllExpenses();
    // this.managerShowAllExpenses = true;
    this.pendingApprovalExpenses = true;
    this.resolvedAllExpenses = false;
  }

  async populateEmployeeExpenses() {
    this.expenses = await this.userService.promiseGetAllExpenses();
    this.hideAllPages();
    this.pendingUserExpenses = true;
    this.showUserDetails = true;   
  }

  async populateResolvedEmployeeExpenses() {
    this.expenses = await this.userService.promiseGetAllExpenses();
    this.hideAllPages();
    this.showUserDetails = true; 
    this.resolvedUserExpenses = true;
    
  }

  async populateAllResolved() {
    this.expenses = await this.userService.promiseGetAllExpenses();
    this.hideAllPages();
    this.resolvedAllExpenses = true;
    this.showManagerPage = true;
    

  }

  async populateUsers() {
    this.users = await this.userService.promiseGetAllUsers();
  }

  updateExpenseApprove(event, id, title, userid, expenseDate, expenseAmount, imageLink): void {
    console.log("From Update Expense Approved: update expesne function called" + ": " + id, title, userid, this.tempUserId);
    // this.click.emit({expense: this.expense.id});
    var tempExpense;
    for (let i = 0; i < this.expenses.length; i++) {
      tempExpense = this.expenses[i];
      if (tempExpense.id === id) {
        this.expenses.splice(i, 1);
        break;
      }
    }
    this.tempUserId = +this.route.snapshot.paramMap.get('id');
    console.log(this.tempUserId);
    this.tempExpense.id = id;
    this.tempExpense.title = title;
    this.tempExpense.userId = userid;
    this.tempExpense.managerId = this.tempUserId;
    this.tempExpense.decision = 'Approved';
    this.tempExpense.expenseAmount = expenseAmount;
    this.tempExpense.expenseDate = expenseDate;
    this.tempExpense.imageLink = imageLink;
    this.updateExpense();
  }

  updateExpenseDeny(event, id, title, userid, expenseDate, expenseAmount, imageLink): void {
    console.log("From Update Expense Approved: update expesne function called" + ": " + id, title, userid, this.tempUserId);
    // this.click.emit({expense: this.expense.id});
    var tempExpense;
    for (let i = 0; i < this.expenses.length; i++) {
      tempExpense = this.expenses[i];
      if (tempExpense.id === id) {
        this.expenses.splice(i, 1);
        break;
      }
    }
    this.tempUserId = +this.route.snapshot.paramMap.get('id');
    console.log(this.tempUserId);
    this.tempExpense.id = id;
    this.tempExpense.title = title;
    this.tempExpense.userId = userid;
    this.tempExpense.managerId = this.tempUserId;
    this.tempExpense.decision = 'Denied';
    this.tempExpense.expenseAmount = expenseAmount;
    this.tempExpense.expenseDate = expenseDate;
    this.tempExpense.imageLink = imageLink;
    this.updateExpense();
  }

  showEmployeeRequests(event, id): void{
    this.singleId = id;
    this.populateSingleExpenses();
    console.log("This single ID:" + this.singleId);
    this.hideAllPages();
    this.showManagerPage = true;
    this.viewOneEmployeeRequests = true;
  }

  async populateSingleExpenses(){
    this.expenses = await this.userService.promiseGetAllExpenses();
    this.hideAllPages();
    
    this.showManagerPage = true;
    this.viewOneEmployeeRequests = true;
    
  }

  updateExpense(): void {
    this.userService.updateExpense(this.tempExpense);
    // this.resetExpenseForm();
  }

  updateUser(): void{
    this.userService.updateUser(this.tempUser);
  }


  async getUserId2() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tempUser = await this.userService.promiseGetUserId(id);
    // this.tempUserPending;
    // this.tempUserResolved;
    // this.tempBind = this.tempUser;

    this.mainNavbar = false;
    if (id === 1 || id === 3 || id === 5) {
      this.showManagerPage = true;
      this.showUserDetails = false;

    } else {
      this.showManagerPage = false;
      this.showUserDetails = true;
    }
  }

  logout() {
    this.expenses = [];
    this.users = [];
    this.currentUserExpenses = [];
    this.hideAllPages();
    this.tempUserId = 0;

    console.log("TempUser ID" + this.tempUserId);
    this.router.navigate(['/login']);
  }

 async viewAllUsers() {
    this.hideAllPages();
    this.viewAllEmployees = true;
    this.showManagerPage = true;
    this.users = await this.userService.promiseGetAllUsers();
  }

  /*
  viewAllUsers(): void {
    this.hideAllPages();
    this.viewAllEmployees = true;
    this.showManagerPage = true;
  }
  */

  hideAllPages(): void {
    this.mainNavbar = false;
    this.showUserDetails = false;
    this.managerShowAllExpenses = false;
    this.pendingApprovalExpenses = false;
    this.pendingUserExpenses = false;
    this.showManagerPage = false;
    this.resolvedAllExpenses = false;
    this.showProfile = false;
    this.showPhotoPreview = false;
    this.showReimbursementRequest = false;
    this.editProfile = false;
    this.viewAllEmployees = false;
    this.resolvedUserExpenses = false;
    this.resolvedAllExpenses = false;
    this.viewOneEmployeeRequests = false;
  }

  managerHomePage(): void{
    this.hideAllPages();
    this.showManagerPage = true;
  }


}
