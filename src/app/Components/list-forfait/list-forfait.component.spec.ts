import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListForfaitComponent } from './list-forfait.component';

describe('ListForfaitComponent', () => {
  let component: ListForfaitComponent;
  let fixture: ComponentFixture<ListForfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListForfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListForfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
