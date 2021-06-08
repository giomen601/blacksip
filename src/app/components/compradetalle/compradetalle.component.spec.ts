import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradetalleComponent } from './compradetalle.component';

describe('CompradetalleComponent', () => {
  let component: CompradetalleComponent;
  let fixture: ComponentFixture<CompradetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompradetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
