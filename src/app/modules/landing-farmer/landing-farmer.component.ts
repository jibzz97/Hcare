import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { PatientService } from '../services/patient.service';
import { Patient } from '../models/Patient';

@Component({
  selector: 'app-landing-farmer',
  templateUrl: './landing-farmer.component.html',
  styleUrls: ['./landing-farmer.component.css']
})
export class LandingFarmerComponent implements OnInit {

  products1!: Patient[];
  constructor(private ps: PatientService) { }

  ngOnInit(): void {
    this.ps.findAllPatients().subscribe(data => this.products1 = data);
    // sessionStorage.clear();
    
  }



  clear(table: Table) {
    table.clear();
  }
}
