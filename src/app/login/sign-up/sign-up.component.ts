import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {BackendService} from "../../services/backend.service";
import {UserData} from "../../interfaces/user-data";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  correctPw = true;
  userData?: UserData

  signUpForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    repeatPassword: ['', Validators.required],
  })



  constructor(private fb: FormBuilder,
              private bs: BackendService,
              private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Nutzer bestätigt eingabe seiner Daten.
   * Überprüfung, ob alle angaben vorhanden sind und pw identisch.
   *
   * POST User
   * Link zur Startseite
   */
  submitForm(){
    console.log(this.signUpForm.value);
    this.correctPw = ((this.signUpForm.get('repeatPassword')?.value == this.signUpForm.get('password')?.value));
    console.log(this.correctPw);

    if(this.correctPw){
      this.userData = {
        username : this.signUpForm.get("userName")?.value,
        password :this.signUpForm.get("password")?.value,
        pictureid : "",
      };
      this.bs.createUser(this.userData).subscribe(
        res => {
          console.log(res);
        }
      );
      this.router.navigate(['/page']);
    }
  }
}
