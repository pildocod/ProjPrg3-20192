import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InmuebleEditorComponent } from './inmueble-editor.component';

describe('InmuebleEditorComponent', () => {
  let component: InmuebleEditorComponent;
  let fixture: ComponentFixture<InmuebleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InmuebleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InmuebleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
