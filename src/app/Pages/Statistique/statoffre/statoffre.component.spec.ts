import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoffreComponent } from './statoffre.component';

describe('StatoffreComponent', () => {
  let component: StatoffreComponent;
  let fixture: ComponentFixture<StatoffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatoffreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatoffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
