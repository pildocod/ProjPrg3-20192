import { Component, OnInit } from '@angular/core';
import { HogarSecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private secService: HogarSecurityService,
    private router: Router) { }

  ngOnInit() {
    this.secService.logoutUser();
    this.router.navigate(['/home']);
  }
}
