import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroBookingComponent } from './registro-booking.component';

describe('RegistroBookingComponent', () => {
  let component: RegistroBookingComponent;
  let fixture: ComponentFixture<RegistroBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
