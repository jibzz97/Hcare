import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Staff } from '../models/staff';
import { throwError } from 'rxjs/internal/observable/throwError';
import Swal from 'sweetalert2';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // isLoggedIn = false;
  private isLoggedIn = new Subject<boolean>();
  redirectUrl!: string;
  constructor(private router: Router, private httpClient: HttpClient) {
    this.isLoggedIn.next(false);

   }

  loginStaff(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password', password);
    console.log(email + password)
    return this.httpClient.get<Staff>("http://localhost:8080/staffLogin", { params }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);
          return userData;
        }
      ), catchError(this.handleError)


    );
  }

  handleError(error: { error: { message: any; }; status: any; message: any; }) {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = error.error.message;
    } else {
      // server-side error
      errorMessage = error.status + ' ' + error.message;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
    })
    return throwError(errorMessage);
  }

  setUserLoggedIn(userLoggedIn: boolean) {
    this.isLoggedIn.next(userLoggedIn);
  }
  getUserLoggedIn(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }
  
  whenLoginIsWrong(errorMessage: string) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
    })
  }



  loginPatient(email: string, password: string) {
    const params = new HttpParams().set('email', email).set('password', password);
    console.log(email + password)
    return this.httpClient.get<Staff>("http://localhost:8080/patientLoging", { params }).pipe(
      map(
        userData => {
          sessionStorage.setItem('email', email);
          sessionStorage.setItem('password', password);

          return userData;
        }
      )

    );
  }

  logout(): void {
    // this.isLoggedIn = false;
    
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}