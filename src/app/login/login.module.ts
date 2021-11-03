import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from '../login-routing.module';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SignUpComponent,
    LoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    SignUpComponent,
    LoginComponent,
  ]
})
export class LoginModule { }
