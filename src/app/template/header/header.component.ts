import { Component, OnInit } from '@angular/core';
import { HogarSecurityService } from 'src/app/services/security.service';
import { UserModel } from 'src/app/models/UserModel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userInfo: UserModel;
  userLogged: Boolean = false;
  userName: String;

  subscription: Subscription;

  constructor(private secService: HogarSecurityService) { }

  ngOnInit(): void {
    this.verifyUserSession();
  }

  verifyUserSession() {
    this.subscription = this.secService.getUserInfo().subscribe(user => {
      this.userInfo = user;
      this.updateInfo();
    });
  }

  updateInfo() {
    let msg = "In session: ";
    this.userLogged = this.userInfo.isLogged;
    this.userName = this.userInfo.name;
  }

}
