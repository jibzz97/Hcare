import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';

import { ChartModule } from 'primeng/chart';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoginComponent } from './modules/login/login.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { ContainerComponent } from './components/container/container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingDoctorComponent } from './modules/landing-doctor/landing-doctor.component';
import { LandingFarmerComponent } from './modules/landing-farmer/landing-farmer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,

    DashboardComponent,
     LoginComponent,
     FieldErrorDisplayComponent,
     ContainerComponent,
     PageNotFoundComponent,
     LandingDoctorComponent,
     LandingFarmerComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgApexchartsModule,
    ChartModule,
    ProgressSpinnerModule
   
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
