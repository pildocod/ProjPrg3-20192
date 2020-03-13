import { Component, OnInit } from '@angular/core';
import * as M from './../../../../node_modules/materialize-css/dist/js/materialize.js'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  constructor() { }
  
  options = {}
  ngOnInit(): void {
    M.AutoInit();
  }
}

