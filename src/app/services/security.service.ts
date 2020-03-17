import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  userLogged: boolean = true;

  constructor() { }

  isUserLogged(){
    return this.userLogged;
  }
  
}