import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [InmuebleEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class EditorsModule { }
