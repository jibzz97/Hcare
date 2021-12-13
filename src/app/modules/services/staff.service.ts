import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Staff } from '../models/staff';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  public findAllStaff(): Observable<Staff[]> {
    return this.httpClient.get<Staff[]>("http://localhost:8080/findAllStaffs");
  }

  public AddStaff(staff: Staff) {
    return this.httpClient.post<Staff>("http://localhost:8080/addStaff", staff);
  }

  public deleteStaff(staff: Staff) {
    return this.httpClient.get<Staff>("http://localhost:8080/deleteStaffById?id=" + staff.id, { responseType: 'text' as 'json' });
  }

  public getStaffById(staff: Staff) {
    return this.httpClient.get<Staff>("http://localhost:8080/getStaff?id=" + staff.id);
  }

  public UpdateStaff(staff: Staff) {
    return this.httpClient.put<Staff>("http://localhost:8080/updateStaff", staff);
  }

}