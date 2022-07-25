import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAndSecComponent } from './log-and-sec.component';

describe('LogAndSecComponent', () => {
  let component: LogAndSecComponent;
  let fixture: ComponentFixture<LogAndSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAndSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogAndSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
