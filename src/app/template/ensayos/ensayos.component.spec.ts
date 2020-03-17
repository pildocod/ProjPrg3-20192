import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayosComponent } from './ensayos.component';

describe('EnsayosComponent', () => {
  let component: EnsayosComponent;
  let fixture: ComponentFixture<EnsayosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsayosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsayosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
