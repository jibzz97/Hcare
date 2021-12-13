import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from '../models/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  public findAllPatients(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>("http://localhost:8080/findAllPatients");
  }

  public AddPatient(patient: Patient) {
    return this.httpClient.post<Patient>("http://localhost:8080/addPatient", patient);
  }

  public deletePatient(patient: Patient) {
    return this.httpClient.get<Patient>("http://localhost:8080/deletePatientById?id=" + patient.id, { responseType: 'text' as 'json' });
  }

  public getPatientById(patient: Patient) {
    return this.httpClient.get<Patient>("http://localhost:8080/getPatient?id=" + patient.id);
  }

  public UpdatePatient(patient: Patient) {
    return this.httpClient.put<Patient>("http://localhost:8080/updatePatient", patient);
  }

}