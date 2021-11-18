import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFarmerComponent } from './landing-farmer.component';

describe('LandingFarmerComponent', () => {
  let component: LandingFarmerComponent;
  let fixture: ComponentFixture<LandingFarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingFarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
