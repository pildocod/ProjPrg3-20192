import { Component, OnInit } from '@angular/core';
import { HogarSecurityService } from 'src/app/services/security.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityModule } from './../security.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidation: FormGroup;

  constructor(
    private fb: FormBuilder,
    private secService: HogarSecurityService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.fgValidationBuilder();
  }

  fgValidationBuilder() {
    this.fgValidation = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(7), Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]]
    })
  }

  loginEvent() {
    if (this.fgValidation.invalid) {
      alert("Invalid data");
    } else {
      let u = this.fg.username.value;
      let ps = this.fg.password.value;
      this.secService.loginUser(u, ps);
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }

}
