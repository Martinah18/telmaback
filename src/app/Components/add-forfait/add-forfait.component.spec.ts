import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForfaitComponent } from './add-forfait.component';

describe('AddForfaitComponent', () => {
  let component: AddForfaitComponent;
  let fixture: ComponentFixture<AddForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
