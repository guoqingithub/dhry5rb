import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../user/login/login.component';
import { RegistrationComponent } from '../user/registration/registration.component';

import {HttpClient,HttpHeaders} from '@angular/common/http';
 
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialogagree: MatDialog,public http:HttpClient,public translateService: TranslateService) {}


  ngOnInit(): void {
  }

  openDialog(){
    
    const dialogRef = this.dialogagree.open(LoginComponent,{
      height: '700px',
  width: '400px',

    });
  }
    openDialog1(){
    
      const dialogRef = this.dialogagree.open(RegistrationComponent,{
        height: '700px',
    width: '700px',
    
      });
    
  }

  public list:any;
  public list1:object | undefined;

  public username:string="";


  getdata(){

   // let api='http://localhost:5001/api/User/{"parameters":{"user":{"authid":"hjj","password":"shanghai"}}}';

    let api="http://test.loganren.xyz/Fresh/api/user/{'parameters':{'user':{'authid':'9527', 'password':'000000'}}}";

    
    this.http.get(api).subscribe(Response=>{
      console.log(Response);
      this.list=Response;
    })
  }

  getdata1(){
 //   let api="http://test.loganren.xyz/Fresh/api/product";

    let api='http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/{"parameters":{"user":{"authid":"kil","password":"shanghai"}}}'; 
     //接口放在变量里，之后调用
    this.http.get(api).subscribe(Response=>{
      console.log(Response); //在控制台上显示出来 （整个object）
      this.list1=Response;

      this.username=Object(this.list1).firstName;  //根据索引firstName读取出object里的单个字符串

    })
  }
}
 
