import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import { Expense } from './expense';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/p3sample/api/users')
  }

  async promiseGetAllUsers(): Promise<User[]> {
    return await this.http.get<User[]>('http://localhost:8080/p3sample/api/users').toPromise();
  }

  async promiseGetAllExpenses(): Promise<Expense[]> {
    return await this.http.get<Expense[]>('http://localhost:8080/p3sample/api/expenses').toPromise();
  }

  sendUser(user: User): void {
    this.http.post('http://localhost:8080/p3sample/api/users', user)
      .subscribe((data) => { console.log(data) });
  }

  getUser(user: User): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/p3sample/api/users/${user.userName}`)
  }

  async promiseGetUser(user: User): Promise<User> {
    return await this.http.get<User>(`http://localhost:8080/p3sample/api/users/${user.userName}`)
      .toPromise();
  }

  loginUser(user: User): void {
    this.http.get(`http://localhost:8080/p3sample/api/users/${user.userName}`)
      .subscribe((data) => { console.log(data) });
  }

  getUserId(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/p3sample/api/users/${id}`);
  }

  async promiseGetUserId(id: number): Promise<User> {
    return await this.http.get<User>(`http://localhost:8080/p3sample/api/users/${id}`)
      .toPromise();
  }

  sendExpense(expense: Expense): void {
    this.http.post('http://localhost:8080/p3sample/api/expense', expense)
      .subscribe((data) => { console.log(data) });
  }

  updateExpense(expense: Expense): void {
    this.http.post('http://localhost:8080/p3sample/api/expense', expense)
      .subscribe((data) => { console.log(data) });
  }

  updateUser(user: User): void {
    this.http.post('http://localhost:8080/p3sample/api/users/', user)
      .subscribe((data) => { console.log(data) });
  }


}
