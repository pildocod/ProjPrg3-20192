import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmueble-editor',
  templateUrl: './inmueble-editor.component.html',
  styleUrls: ['./inmueble-editor.component.css']
})
export class InmuebleEditorComponent implements OnInit {
  property = {
    _id: null,
    department: null,
    city: null,
    address: null,
    value: null,
    type: null,
    offer: null,
    adviser: null,
    photos: null,
    video: null,
    status: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
