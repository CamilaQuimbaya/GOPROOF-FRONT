import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypointsComponent } from './mypoints.component';

describe('MypointsComponent', () => {
  let component: MypointsComponent;
  let fixture: ComponentFixture<MypointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
