import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDoctorComponent } from './landing-doctor.component';

describe('LandingDoctorComponent', () => {
  let component: LandingDoctorComponent;
  let fixture: ComponentFixture<LandingDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
