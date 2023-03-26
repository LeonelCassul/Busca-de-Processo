import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprocessoComponent } from './addprocesso.component';

describe('AddprocessoComponent', () => {
  let component: AddprocessoComponent;
  let fixture: ComponentFixture<AddprocessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprocessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprocessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
