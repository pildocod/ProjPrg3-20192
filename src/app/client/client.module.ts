import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { ClientListComponent } from './client-list/client-list.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [ClientListComponent, ClientCreatorComponent, ClientEditorComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ClientCreatorComponent,
    ClientEditorComponent,
    ClientListComponent
  ]
})
export class ClientModule { }
