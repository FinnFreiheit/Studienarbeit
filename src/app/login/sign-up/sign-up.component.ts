import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm = this.fb.group({
    userName: [''],
    password: [''],
    repeatPassword: [''],
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  submitForm(){
    console.log(this.signUpForm.value);
  }

}
