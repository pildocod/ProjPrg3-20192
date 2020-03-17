import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmuebleEditorComponent } from './inmueble-editor/inmueble-editor.component';
import { EditorsModule } from './editors.module'; //SIEMPRE PARA ngModel

const routes: Routes = [
  {
    path: 'property/editor',
    component: InmuebleEditorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    EditorsModule
  ],
  exports: [RouterModule]
})
export class EditorsRoutingModule { }
