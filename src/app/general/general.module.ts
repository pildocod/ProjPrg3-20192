import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HomeComponent, ContactFormComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    HomeComponent,
    ContactFormComponent,
    PageNotFoundComponent
  ]
})
export class GeneralModule { }
