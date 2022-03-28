import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRestaurantComponent } from './modal-restaurant.component';

describe('ModalRestaurantComponent', () => {
  let component: ModalRestaurantComponent;
  let fixture: ComponentFixture<ModalRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRestaurantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
