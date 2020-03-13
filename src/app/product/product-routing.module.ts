import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreatorComponent } from './product-creator/product-creator.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';


const routes: Routes = [
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product',
    pathMatch: 'full',
    redirectTo: '/product/list'
  },
  {
    path: 'product/creator',
    component: ProductCreatorComponent
  },
  {
    path: 'product/editor',
    component: ProductEditorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ProductModule
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
