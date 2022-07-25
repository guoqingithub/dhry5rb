import { Component, OnInit,ViewChild } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../user/login/login.component';
import { RegistrationComponent } from '../user/registration/registration.component';
import { StorageService } from '../shared/services/storage/storage.service';

import {TranslateService} from '@ngx-translate/core';


var storage=new StorageService();

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})





export class MainNavComponent implements OnInit {

  constructor(public dialogagree: MatDialog,public http:HttpClient,public translateService: TranslateService) { }




  ngOnInit(): void {
    const browserLang = this.translateService.getBrowserLang();
    this.settingBtn(browserLang);
  }
  openDialog(){
    
    const dialogRef = this.dialogagree.open(LoginComponent,{
      height: '700px',
  width: '400px',

 
    });
     storage.isLogin1=true;
     this.isLogin=storage.isLogin1;
  }
    openDialog1(){
    
      const dialogRef = this.dialogagree.open(RegistrationComponent,{
        height: '700px',
    width: '700px',
    
      });
    
  }

  public list:any;
  public list1:any;
  public isLogin:boolean=storage.isLogin1; //
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

    let api="http://test.loganren.xyz/Fresh/api/product/category";
    this.http.get(api).subscribe(Response=>{
      console.log(Response);
      this.list1=Response;
    })
  }

  public username:string="Mr.Li";
  

  Logout(){
    storage.isLogin1=false;
    this.isLogin=storage.isLogin1
  }
  


  public  languageBtn:string="";
  public  language:string="";


  /*设置btn的文字和需要传递的参数*/
  settingBtn(language: string) {
    if (language === 'zh') {
      this.languageBtn = '中文';
      this.language = 'en';
    } else {
      this.languageBtn = 'English';
      this.language = 'zh';
    }
  }

  /*切换语言*/
  changeLanguage(lang: string) {
    console.log(lang);
    this.translateService.use(lang);
    this.settingBtn(lang);
  }

  manage(){
    
  }

}
