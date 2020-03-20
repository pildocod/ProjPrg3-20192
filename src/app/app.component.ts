import { Component, OnInit } from '@angular/core';

declare let initComps: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HogarColStore';
  options = {};

  ngOnInit(){
    initComps();
  }
}