import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login/login.component";
import {SignUpComponent} from "./login/sign-up/sign-up.component";


const loginRoutes: Routes = [
  { path: 'page/login', component: LoginComponent },
  { path: 'page/login/signUp', component: SignUpComponent},

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }
