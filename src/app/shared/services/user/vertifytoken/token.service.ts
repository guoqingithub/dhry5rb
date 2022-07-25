import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  //本地存储jwt_token
  set(token:any){
    localStorage.setItem('jwt_token',token);
  }
 //获取本地存储jwt_token
  get(){
    return localStorage.getItem('jwt_token');
  }
 //移除本地存储jwt_token
  remove(){
    localStorage.removeItem('jwt_token');
  }

}
