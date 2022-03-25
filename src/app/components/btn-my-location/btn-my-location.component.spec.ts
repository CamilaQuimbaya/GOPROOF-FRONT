import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnMyLocationComponent } from './btn-my-location.component';

describe('BtnMyLocationComponent', () => {
  let component: BtnMyLocationComponent;
  let fixture: ComponentFixture<BtnMyLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnMyLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnMyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
