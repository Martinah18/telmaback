import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditForfaitComponent } from './edit-forfait.component';

describe('EditForfaitComponent', () => {
  let component: EditForfaitComponent;
  let fixture: ComponentFixture<EditForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
