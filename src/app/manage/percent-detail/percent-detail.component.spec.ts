import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentDetailComponent } from './percent-detail.component';

describe('PercentDetailComponent', () => {
  let component: PercentDetailComponent;
  let fixture: ComponentFixture<PercentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
