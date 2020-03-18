import { Component, OnInit } from '@angular/core';
import { HogarSecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private secService: HogarSecurityService) { }

  userLogged: boolean;
  userName: String;

  ngOnInit(): void {
    this.verifyUserSession();
  }

  verifyUserSession(){
    this.userLogged = this.secService.isUserLogged().logged;
    this.userName = this.secService.isUserLogged().name;
  }

}
