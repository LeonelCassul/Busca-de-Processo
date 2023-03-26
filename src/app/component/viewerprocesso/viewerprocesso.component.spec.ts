import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerprocessoComponent } from './viewerprocesso.component';

describe('ViewerprocessoComponent', () => {
  let component: ViewerprocessoComponent;
  let fixture: ComponentFixture<ViewerprocessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerprocessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewerprocessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
