import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemslistComponent } from './itemslist.component';

describe('ItemslistComponent', () => {
  let component: ItemslistComponent;
  let fixture: ComponentFixture<ItemslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemslistComponent]
    });
    fixture = TestBed.createComponent(ItemslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
