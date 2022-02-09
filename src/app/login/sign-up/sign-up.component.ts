import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  correctPw = true;

  signUpForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
  })



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.signUpForm.value);
    this.correctPw = ((this.signUpForm.get('repeatPassword')?.value == this.signUpForm.get('password')?.value));
    console.log(this.correctPw);
  }

  checkPw() {
  }
}
