import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprocessoComponent } from './showprocesso.component';

describe('ShowprocessoComponent', () => {
  let component: ShowprocessoComponent;
  let fixture: ComponentFixture<ShowprocessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowprocessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowprocessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
