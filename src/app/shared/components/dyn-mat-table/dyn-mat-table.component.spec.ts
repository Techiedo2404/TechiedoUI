import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynMatTableComponent } from './dyn-mat-table.component';

describe('DynMatTableComponent', () => {
  let component: DynMatTableComponent;
  let fixture: ComponentFixture<DynMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynMatTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
