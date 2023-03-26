import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchprocessoComponent } from './searchprocesso.component';

describe('SearchprocessoComponent', () => {
  let component: SearchprocessoComponent;
  let fixture: ComponentFixture<SearchprocessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchprocessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchprocessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
