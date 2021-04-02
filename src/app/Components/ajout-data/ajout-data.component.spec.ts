import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDataComponent } from './ajout-data.component';

describe('AjoutDataComponent', () => {
  let component: AjoutDataComponent;
  let fixture: ComponentFixture<AjoutDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
