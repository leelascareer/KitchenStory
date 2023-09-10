import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcartComponent } from './editcart.component';

describe('EditcartComponent', () => {
  let component: EditcartComponent;
  let fixture: ComponentFixture<EditcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditcartComponent]
    });
    fixture = TestBed.createComponent(EditcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
