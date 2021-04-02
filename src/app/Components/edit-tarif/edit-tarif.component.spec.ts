import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTarifComponent } from './edit-tarif.component';

describe('EditTarifComponent', () => {
  let component: EditTarifComponent;
  let fixture: ComponentFixture<EditTarifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTarifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTarifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
