import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingDoctorComponent } from './modules/landing-doctor/landing-doctor.component';
import { LandingFarmerComponent } from './modules/landing-farmer/landing-farmer.component';
import { LoginComponent } from './modules/login/login.component';



const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: LandingDoctorComponent },
          { path: 'Home', component: LandingDoctorComponent },
          { path: 'farmer', component: LandingFarmerComponent },

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
