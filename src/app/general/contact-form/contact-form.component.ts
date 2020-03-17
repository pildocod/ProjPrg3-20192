import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as M from './../../../../node_modules/materialize-css/dist/js/materialize.js'
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  fgValidation: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  options = {}
  ngOnInit(): void {
    M.AutoInit();
  }

  fgValidationBuilder(){
    this.fgValidation = this.fb.group({
      name:[],
      email:[],
      phone:[],
      typeOffer:[],
      message:[]
      //ESTOS REEMPLAZAN A LOS ATRIBUTOS DEL NGMODEL
      //por lo tanto, en el html borrar los ngModels
    })
  }
}

