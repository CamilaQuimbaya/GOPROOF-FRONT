import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeLandingComponent } from './before-landing.component';

describe('BeforeLandingComponent', () => {
  let component: BeforeLandingComponent;
  let fixture: ComponentFixture<BeforeLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
