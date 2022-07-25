import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReleasedProductComponent } from './my-released-product.component';

describe('MyReleasedProductComponent', () => {
  let component: MyReleasedProductComponent;
  let fixture: ComponentFixture<MyReleasedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyReleasedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReleasedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
