import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardhomepageComponent } from './dashboardhomepage.component';

describe('DashboardhomepageComponent', () => {
  let component: DashboardhomepageComponent;
  let fixture: ComponentFixture<DashboardhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
