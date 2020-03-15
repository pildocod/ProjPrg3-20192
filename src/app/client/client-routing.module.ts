import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientModule } from './client.module'; //IMPORTAR PARA ngModel
import { ClientListComponent } from './client-list/client-list.component';
import { ClientEditorComponent } from './client-editor/client-editor.component';
import { ClientCreatorComponent } from './client-creator/client-creator.component';


const routes: Routes = [
  {
    path: 'client/list',
    component: ClientListComponent
  }, {
    path: 'client',
    pathMatch: 'full',
    redirectTo: 'client/list'
  }, {
    path: 'client/creator',
    component: ClientCreatorComponent
  }, {
    path: 'client/editor/:clientId',
    component: ClientEditorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    //ClientModule
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
