import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Staff } from '../models/staff';
import { LoginService } from '../services/login.service';

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
  isloggedIn: boolean = false;
  redirectURL!: string;

  get f() {
    return this.loginForm.controls;
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    console.log("conn "+sessionStorage.getItem('connectedUser'))
    if (sessionStorage.getItem('isloggedIn')) {
      console.log(JSON.parse(sessionStorage.getItem('connectedUser') || '{}').role)
      this.router.navigate([JSON.parse(sessionStorage.getItem('connectedUser') || '{}').role]);

    }
  }
  staff!: Staff;



  login() {

    console.log("gggggggggggggg")
    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;

    console.log(JSON.stringify(this.loginForm.value) + "  " + this.password)

    this.loginService.loginStaff(this.email, this.password)
      .subscribe(userData => {
        sessionStorage.clear();
        if (userData != null && userData.password == this.password) {
          this.redirectURL = `${userData.role}`;
          this.isloggedIn = true;
          sessionStorage.setItem('isloggedIn', JSON.stringify(this.isloggedIn));
          sessionStorage.setItem('connectedUser', JSON.stringify(userData));
          this.staff=JSON.parse( JSON.stringify(userData));
          console.log('connectedUser', this.staff.id);

          console.log('connectedUser', JSON.stringify( this.staff.email));
          console.log('connectedUser', this.staff.surname);

          // Increase expiration time after save
          sessionStorage.setItem('timeOut', '15');
          this.router.navigate([this.redirectURL])

        } else {
          this.whenLoginIsWrong();
          this.isloggedIn = false;
        }
      })
  }


  loginPatient() {

    this.email = this.loginForm.get('email')?.value;
    this.password = this.loginForm.get('password')?.value;


    this.loginService.loginPatient(this.email, this.password)
      .subscribe(userData => {
        sessionStorage.clear();
        if (userData != null && userData.password == this.password) {
          this.redirectURL = 'patient';
          this.loginService.setUserLoggedIn(true)

          this.isloggedIn = true;
          sessionStorage.setItem('isloggedIn', JSON.stringify(this.isloggedIn));
          sessionStorage.setItem('connectedUser', JSON.stringify(userData));
          this.setWithExpiry();
          this.router.navigate([this.redirectURL])

        } else {
          this.whenLoginIsWrong();
          this.isloggedIn = false;
        }
      })
  }
   setWithExpiry() {
    const now = new Date()
  
    // `item` is an object which contains the original value
    // as well as the time when it's supposed to expire
    const item = now.getTime() + 5000;
    console.log("item "+item)
    sessionStorage.setItem('timeExipred', JSON.stringify(50))
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


  whenLoginIsWrong() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }


  whenAccessIsDenied() {
    Swal.fire({
      icon: 'error',
      title: 'Access',
      text: "Sorry you don't have access to this apllication!",
    })
  }





}
