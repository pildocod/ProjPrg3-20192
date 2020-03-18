import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientModule } from '../client/client.module';

const base_url: string = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class HogarSecurityService {

  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  private userLogged: boolean = false;
  clientList: ClientModule[] = [];

  constructor(private http: HttpClient) {
    this.verifyUserInSession();
  }

  getUserInfo() {
    return this.userInfo.asObservable();
  }
  
  verifyUserInSession() {
    let session = localStorage.getItem("activeUser");
    if(session != undefined){
      this.userInfo.next(JSON.parse(session));
    }
  }

  loginUser(userName: String, password: String): Observable<UserModel> {
    let clientList = this.http.get<UserModel>(`${base_url}userExists/${userName}/${password}`);
    if (clientList != null) {
      clientList.forEach(user => {
        user.isLogged = true;
        this.userInfo.next(user);
        localStorage.setItem("activeUser", JSON.stringify(user));
      });
    } else {
      this.userLogged = false;
    }
    return clientList;
  }

  isActiveSession(){
    return this.userInfo.getValue().isLogged;
  }

  logoutUser(){
    localStorage.removeItem("activeUser");
    this.userInfo.next(new UserModel());
  }
}