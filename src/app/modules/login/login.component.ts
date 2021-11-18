import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)

  });

  private email: any;
  private password: any;
  get f() {
    return this.loginForm.controls;
  }

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  login() {

    this.email = this.loginForm.get('email');
    this.password = this.loginForm.get('password');
    this.loginForm;
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.loginForm);
    }

    this.router.navigate(["Home"])

  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });



  }





}
