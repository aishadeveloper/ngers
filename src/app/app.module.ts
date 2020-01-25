import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AddExpensePageComponent } from './add-expense-page/add-expense-page.component';
import { EditExpensePageComponent } from './edit-expense-page/edit-expense-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserAllComponent } from './user-all/user-all.component';
import { ManagerAllComponent } from './manager-all/manager-all.component';
import { ExpenseAllComponent } from './expense-all/expense-all.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { ImagesComponent } from './images/images.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { environment } from '../environments/environment';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { NavbarManagerComponent } from './navbar-manager/navbar-manager.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    LogoComponent,
    UserFormComponent,
    AddExpensePageComponent,
    EditExpensePageComponent,
    EmployeePageComponent,
    ManagerPageComponent,
    UserProfilePageComponent,
    UserAllComponent,
    ManagerAllComponent,
    ExpenseAllComponent,
    HomeComponent,
    UserPageComponent,
    ImagesComponent,
    ImageListComponent,
    ImageComponent,
    NavbarEmployeeComponent,
    NavbarManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
