import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReallyFreshComponent } from './really-fresh.component';

describe('ReallyFreshComponent', () => {
  let component: ReallyFreshComponent;
  let fixture: ComponentFixture<ReallyFreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReallyFreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReallyFreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
