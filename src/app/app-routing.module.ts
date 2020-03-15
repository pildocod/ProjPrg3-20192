import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from './general/general.module';
import { HomeComponent } from './general/home/home.component';
import { PageNotFoundComponent } from './general/page-not-found/page-not-found.component';
import { ContactFormComponent } from './general/contact-form/contact-form.component';
import { ProductRoutingModule } from './product/product-routing.module';
import { ClientRoutingModule } from './client/client-routing.module';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'contact-form',
    component:ContactFormComponent
  },
  {
    path:'',
    pathMatch:'full',
		redirectTo : '/home'
  },
  {
		path: '**',
		component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GeneralModule,
    ProductRoutingModule,
    ClientRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
