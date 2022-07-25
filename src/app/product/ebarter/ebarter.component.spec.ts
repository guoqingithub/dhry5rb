import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbarterComponent } from './ebarter.component';

describe('EbarterComponent', () => {
  let component: EbarterComponent;
  let fixture: ComponentFixture<EbarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbarterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EbarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
