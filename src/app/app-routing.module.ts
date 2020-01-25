import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { ManagerPageComponent } from './manager-page/manager-page.component';
import { LoginComponent } from './login/login.component';
import { UserAllComponent } from './user-all/user-all.component';
import { ImagesComponent } from './images/images.component';
import { ImageListComponent } from './image-list/image-list.component';
import { ImageComponent } from './image/image.component';


const routes: Routes = [
  {
    path : 'manager',
    component : ManagerPageComponent,
  },

  {
    path : 'login',
    component : LoginComponent,
  },

  {
    path: 'allusers',
    component: UserAllComponent,
  },

  {
    path: 'userdetail/:id',
    component: EmployeePageComponent,
  },

  {
    path: 'image',
    component: ImagesComponent, 
  },

  {
    path: 'upload',
    component: ImageComponent,
  },

  {
    path: 'list',
    component: ImageListComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
