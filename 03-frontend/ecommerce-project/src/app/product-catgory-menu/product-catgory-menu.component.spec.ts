import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCatgoryMenuComponent } from './product-catgory-menu.component';

describe('ProductCatgoryMenuComponent', () => {
  let component: ProductCatgoryMenuComponent;
  let fixture: ComponentFixture<ProductCatgoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCatgoryMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCatgoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
