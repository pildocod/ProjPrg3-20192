import { Component , OnInit} from '@angular/core';
import * as M from './../../node_modules/materialize-css/dist/js/materialize.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HogarColStore';
  options = {};

  ngOnInit(){
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, this.options);
  }
}