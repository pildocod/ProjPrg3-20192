import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ensayos',
  templateUrl: './ensayos.component.html',
  styleUrls: ['./ensayos.component.css']
})
export class EnsayosComponent implements OnInit {

  selectedDay: String = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectChangeHandler(event:any){
    this.selectedDay = event.target.value;
  }
}
