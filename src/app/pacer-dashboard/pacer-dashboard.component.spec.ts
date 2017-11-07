import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacerDashboardComponent } from './pacer-dashboard.component';

describe('PacerDashboardComponent', () => {
  let component: PacerDashboardComponent;
  let fixture: ComponentFixture<PacerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
