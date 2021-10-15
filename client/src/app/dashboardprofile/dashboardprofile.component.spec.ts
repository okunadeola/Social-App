import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardprofileComponent } from './dashboardprofile.component';

describe('DashboardprofileComponent', () => {
  let component: DashboardprofileComponent;
  let fixture: ComponentFixture<DashboardprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
