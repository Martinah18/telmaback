import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstatComponent } from './formstat.component';

describe('FormstatComponent', () => {
  let component: FormstatComponent;
  let fixture: ComponentFixture<FormstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
