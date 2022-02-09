import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BackendService} from "../../services/backend.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName:[''],
    password: [''],
  })

  constructor(private fb: FormBuilder,
              private bs: BackendService) { }

  ngOnInit(): void {
    this.bs.getAllUser().subscribe(res => console.log(res))
  }

  submitForm(){
    console.log(this.loginForm.value);
  }

}
