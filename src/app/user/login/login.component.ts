import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router} from '@angular/router';

import { StorageService } from 'src/app/shared/services/storage/storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';
//import { MemberService } from '../shared/services/user/member.service';
//import { LoginParams } from '../user/login/layer/layer-login/layer-login.component';

import {TranslateService} from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from 'src/app/shared/services/user/vertifytoken/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  storageServe: any;
  jwt_token: string="";
  LoginID: any;

  public Loginnnnn:string="Loginnnnnnnn";  
  public password:string="";
  public username:string="";
  public param:any;

  public list:any;
  public list1!: object;
  public firstname:string="";
  public unlogintips:boolean=true;

  public jwtToken:string="opop";
  public theobject!: object;
  //表单
  loginFormGroup!:FormGroup

  constructor(public dialogRef: MatDialogRef<LoginComponent>,public http:HttpClient,public tokense:TokenService,
    private fb:FormBuilder
    ) {}

   
  ngOnInit(): void {
    this.loginFormGroup=this.fb.group({
      usernameCtr:['merry',[Validators.required]],
      passwordCtr:['',[Validators.required,Validators.minLength(5)]],
      rememberCtr:['']
    })
  }
  
  onSubmit(){
    console.log('loginFormGroup是否通过验证:',this.loginFormGroup.valid);
    console.log('loginFormGroup的值:',this.loginFormGroup.value);
    this.param={'username:':this.username,'password:':this.password}
    console.log(this.param);
  }

  IfSignIn(): void {
    
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};  //设置请求头文件，照抄就行，其中httpOption为随便定义的名字
   // this.dialogRef.close();
  //  let api='http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/{"parameters":{"user":{"authid":"kil","password":"shanghai"}}}';
    let loginUrl='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/Login?value={"parameters":{"model":{"username": "'+this.username+'","password":"'+this.password+'","type":"PC"}}}';
    let loginUrlTest ='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/Login?value={"parameters":{"model":{"username": "test1215","password":"123456","type":"PC"}}}'
        
    this.http.post(loginUrl,httpOptions).subscribe(
          (res) => {   console.log(res);                                                                                                                                                                                          
          this.theobject=res;
          // console.log(this.theobject)
          },
          );
    this.jwtToken=Object(this.theobject).jwtToken;
    this.tokense.set(this.jwtToken)
      
      //    if(this.http.post)this.unlogintips=true;
  }
  aaa(){

    window.localStorage.setItem('jwtToken',this.jwtToken );
    console.log(window.localStorage.getItem('jwtToken')); //储存token到本地的过程，未知是否成功
    
  }

/*
  onLogin(params: LoginParams){

          this.memberServe.login(params).subscribe(user => {
            this.user = user;
            var UserObj = JSON.parse(user.registration.value.registrationString.toString());
            this.LogonID = UserObj.parameters.LogonID;
    
            document.cookie = 'isLogin=' + true;
            this.openSnackBar('登陆成功','');
            this.isLogin = true;
            this.common.isLogin = this.isLogin;
            console.log("登录后是否显示个人中心",this.isLogin);
    
            //1.登陆成功后关闭弹窗
      //    this.batchActionsServe.controlModal(false);
    
          this.openSnackBar('登陆成功','');
          var payload = this.storageServe.payload(user.jwtToken);
          this.role = payload.Role;
          console.log("登录后的角色：",this.role)
          this.LogonID = payload.LogonID;
          console.log("当前用户名",this.LogonID)
          console.log('解码:',this.storageServe.payload(user.jwtToken));
          console.log('用户信息',this.user);
    
           //1.存储token
           this.jwt_token = user.jwtToken
           this.storageServe.setStorage({
             key:'jwt_token',
             value:this.jwt_token,
           });
    
           this.storageServe.setStorage({
             key: 'UserID',
             value: this.LogonID,
           });
    
           this.storageServe.setStorage({
            key: 'role',
            value: this.role,
          });
    
          this.storageServe.setStorage({
            key: 'isLogin',
            value: this.isLogin,
          });
    
        },({error}) => {
          console.log('error:',error);
          this.openSnackBar('登陆失败','');
        });
      }

     private openSnackBar(message: string, action: string) {
          this._snackBar.open(message, action, {
              duration: 2000,
              verticalPosition: 'top',
              panelClass: 'notif-success'
            });
          }


*/}