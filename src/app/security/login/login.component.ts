import { Component, OnInit } from '@angular/core';
import { HogarSecurityService } from 'src/app/services/security.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityModule } from './../security.module';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';

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

  private saveSessionInfo(){
    
  }
  //let tb_users = JSON.parse(localStorage.getItem("variablename")) //de cadena a JSON
  //localStorage.setItem('testObject', JSON.stringify(testObject)); //de Json a cadena

  loginEvent() {
    if (this.fgValidation.invalid) {
      alert("Invalid data");
    } else {
      let u = this.fg.username.value;
      let ps = this.fg.password.value;
      this.secService.loginUser(u, ps).subscribe(propList => {
        if(propList != null){
          console.log(propList);
          this.router.navigate(['/home']);
          //alert("User found")
        }else{
          alert("User not found")
        }
      });
      
    }
  }

  get fg() {
    return this.fgValidation.controls;
  }

}
