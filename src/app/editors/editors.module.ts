import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [InmuebleEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditorsModule { }
