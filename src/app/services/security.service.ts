import { Injectable } from '@angular/core';
import { UserModel } from '../models/UserModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ClientModule } from '../client/client.module';

const base_url: string = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class HogarSecurityService {

  private userLogged: boolean = false;
  private name: String;
  clientList: ClientModule[] = [];

  constructor(private http: HttpClient) { }

  isUserLogged(){
    return {logged:this.userLogged,name: this.name};
  }

  getNameUser(){
    return this.name;
  }

  loginUser(userName: String,password: String):Observable<UserModel>{
    let clientList = this.http.get<UserModel>(`${base_url}loginByEmail/:${userName}/:${password}`);
    if(clientList){
      this.userLogged = true;
      clientList.forEach(element => {
        this.name = element.name;
      });
    }else{
      this.userLogged = false;
    }
    return clientList;
  }
}