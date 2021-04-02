import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotValidationComponent } from './depot-validation.component';

describe('DepotValidationComponent', () => {
  let component: DepotValidationComponent;
  let fixture: ComponentFixture<DepotValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepotValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
