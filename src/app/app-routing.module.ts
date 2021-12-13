import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorGuard } from './auth/DoctorGuard';
import { FarmerGuard } from './auth/FarmerGuard';
import { PatientGuard } from './auth/PatientGuard';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingDoctorComponent } from './modules/landing-doctor/landing-doctor.component';
import { LandingFarmerComponent } from './modules/landing-farmer/landing-farmer.component';
import { LandingPatientComponent } from './modules/landing-patient/landing-patient.component';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
  {
    path: 'doctor',
    component: ContainerComponent,
    canActivate: [DoctorGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: LandingDoctorComponent },
          { path: 'Home', component: LandingDoctorComponent },
          { path: 'doctor', component: LandingDoctorComponent },

        ]
      }
    ]
  },



  {
    path: 'farmer',
    component: ContainerComponent,
    canActivate: [FarmerGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: LandingFarmerComponent },
          { path: 'Home', component: LandingFarmerComponent },
          { path: 'farmer', component: LandingFarmerComponent },

        ]
      }
    ]
  },


  {
    path: 'patient',
    component: ContainerComponent,
    canActivate: [PatientGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: LandingPatientComponent },
          { path: 'Home', component: LandingPatientComponent },
          { path: 'patient', component: LandingPatientComponent },

        ]
      }
    ]
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'Page-Not-Found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/Page-Not-Found', pathMatch: 'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
