import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';


@NgModule({
  declarations: [ClientListComponent, ClientCreatorComponent, ClientEditorComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    ClientCreatorComponent,
    ClientEditorComponent,
    ClientListComponent
  ]
})
export class ClientModule { }
