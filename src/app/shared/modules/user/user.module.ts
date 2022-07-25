import { NgModule,InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

export const API_URL = new InjectionToken('apiUrl1');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    {provide: API_URL,useValue:'http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/{"parameters":{"user":{"authid":"kil","password":"shanghai"}}}'}
  ]
})
export class UserModule { }
