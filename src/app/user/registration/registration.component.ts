import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User1 } from './user.interface';
import { VertificationService } from '../../shared/services/user/vertification/vertification.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {



  public username: string = "";//用户名
  public password1: string = "";//第一次输入密码
  public password2: string = "";//第二次输入密码

  public flag1: boolean = false; //密码长度
  public flag2: boolean = false; //两次密码是否相同
  public registrationflag: boolean = false;

  public showButtonText: string = "发送短信验证码";//按钮的显示值
  public countDown: boolean = false;//是否开始计数
  public countDownTime = 60;//点击按钮的时间
  public checkV: boolean = false;
  public massage: string = '';//验证码的值

  public lengthh: string = "";
  public token: string = "aaaaaaaaaaaaaaaaaaaa";

  labelPosition: 'before' | 'after' = 'after';

  firstFormGroup!: FormGroup;//第一个表单组
  secondFormGroup!: FormGroup;//第二个表单组

  age: any;//年龄
  userList: any;//用户列表
  userphone: string = "";//用户手机号


  //用户类：包含用户信息
  public user1: User1 = {
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    wechat: '',
    password: '',
    confirmPassword: '',
    invitation: '',
    phonenumber: '',
    company: '',
    country: '',
    province: '',
    city: '',
    usertype: 'SUPPLIER',
    role: 'partner',
    message: '',
    DOB: '01-12-1981',
    address: ''
  };




  //构造函数：表单构建服务（formbuilder）,http客户端服务（httpclient）,以及发送验证码服务（verification）
  constructor(private _formBuilder: FormBuilder, public http: HttpClient, private verification: VertificationService) { }
  //生命周期钩子函数： 创建了两个表单组firstFormGroup和econdFormGroup 
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],


    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrlnicheng: ['', Validators.required],
      secondCtrlyouxiang: ['', Validators.required],
      secondCtrlweixin: ['', Validators.required],
      secondCtrlxingming: ['', Validators.required],
      secondCtrlguojia: ['', Validators.required],
      secondCtrlxing: ['', Validators.required],
      secondCtrlming: ['', Validators.required],
      secondCtrlshengzhou: ['', Validators.required],
      secondCtrlchengshi: ['', Validators.required],
      secondCtrljiedao: ['', Validators.required],
      secondCtrljuese: ['', Validators.required],
      secondCtrlmima: ['', Validators.required],
      secondCtrlquerenmima: ['', Validators.required]
    });


  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

 
  //发送验证码方法：
  sendMessage() {
    this.countDown = true;//开始计数
    this.showButtonText = '验证码已发送(' + 60 + 's)';//按钮显示验证码已经发送60s
    this.verification.sendVerification(this.user1.phonenumber);//调用发送验证码服务
    const start = setInterval(() => { //间歇调用计时器，间隔为1000ms
      if (this.countDownTime >= 0) {
        this.showButtonText = '验证码已发送(' + this.countDownTime-- + 's)';
      } else {
        clearInterval(start); // 清除计时器
        this.showButtonText = '重新发送';
        this.countDown = false;
        this.countDownTime = 60;
      }
    }, 1000);

  }
  //调用发送验证码服务，进行验证码的验证
  checkVerify() {
    //this.verification.checkVerification(this.massage);
    this.verification.checkVerification(this.massage);
    /*    setTimeout(() => {
          this.checkV= this.verification.reply2;
          console.log("checkV:"+this.checkV);
        }, 1000); //1000ms后调用表达式
    */
    /*setTimeout(function () {
      this.checkV= this.verification.reply2;
      console.log("checkV:"+this.checkV);
      }, 500);*/
    /*let attention="请输入正确的验证码";
  if(this.checkV === false){
     this.snackBar.open(attention,"ok" ,{
       duration: 2000,
       verticalPosition: 'top'
     });
   }*/
    console.log('success');
  }
  //密码长度必须大于八位
  passwordlength() {
    if (this.password1.length < 8) this.flag1 = true; //
    else this.flag1 = false;

    console.log("1111111111111");
  }
  //密码必须相同
  passwordsame() {
    if (this.user1.password != this.user1.confirmPassword) this.flag2 = true; //
    else this.flag2 = false;
  }


  onPhoneup(event: any) {
    let input = event.target;
    let value = input.value.replace(/[^0-9]/ig, '');
    var arr = value.split('');
    if (arr.length >= 4) {
      arr.splice(3, 0, ' ');
    }
    if (arr.length >= 9) {
      arr.splice(8, 0, ' ');
    }
    input.value = arr.join('');
    // 输完11位之后
    let phone = event.target.value.replace(/\s+/g, '');
    this.user1.phonenumber = phone;
  }

  /*   onPhonepress(event:any) {
        // 判断是否为数字
        let inputStr = String.fromCharCode(event.keyCode);
        let re = /^[0-9]+.?[0-9]*$/; //判断字符串是否为数字
        if(!re.test(inputStr)) {
          return false;
        }
      }
    */

  checkHasLogonIDBeenUsed() {

  }

  checkphone() { //验证手机号是否成功
    return 1;
  }
  checkLoginID() {

  }
  checkiffull() {//是否都填写完毕
    if (this.password1 != '' && this.password2 != '') return 1;
    else return 0;
  }
  finalregistrationjudge() {

    if (1) this.finalregistration;

  }
  finalregistration() {
    //全部验证通过之后，在此函数发送post

    let api2 = 'http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/Login?value={"parameters":{"model":{"username": "kil","password":"shanghai","type":"PC"}}}';

    //api1 是注册的接口，api2是登录时返回用户token的接口
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  //设置头文件，照抄就行，其中httpOption为随便定义的名字


    //  const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json','Authorization': 'token'})};  //设置头文件，照抄就行，其中httpOption为随便定义的名字

    /*
        this.http.post(api2,
          {"parameters":{"model":{"username": "kil","password":"shanghai","type":"PC"}}},httpOptions).subscribe(
          (res) => {
            console.log(res);
          }
        );
      */

    let api1 ='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/Register/?value=';
    //   'parameters':{'user':{authid:"wang",'referencecode:':'','password':'wjy123456','usertype':"SUPPLIER","email":'2858860124@qq.com','wechat':'a1234567','yearsofbusiness':'999','phone':'17861401462','firstname':'wang','lastname':'jinyu','businesstype':["Fashion_Clothing","Appliance_Grocery_Dining"],'RoleName':'partner','DOB':'01-12-1981','description':'This is for description of a teacher'}}}';
    // {'parameters':{'user':{authid:'wang','referencecode:':'','password':'wjy123456','usertype':'SUPPLIER','email':'2858860124@qq.com','wechat':'a1234567','yearsofbusiness':'999','phone':'17861401462','firstname':'wang','lastname':'jinyu',businesstype:['Fashion_Clothing','Appliance_Grocery_Dining'],'RoleName':'partner','DOB':'01-12-1981','description':'This is for description of a teacher'}}}

    var temp = {
      "parameters": {
        "user":
        {
          "authid" : this.user1.username,
          // "referencecode": "",
          "password": this.user1.password,
          "usertype": "SUPPLIER",
          "email": this.user1.email,
          "wechat": this.user1.wechat,
          "yearsofbusiness": "999",
          "phone": this.user1.phonenumber,
          "firstname": this.user1.firstname,
          "lastname": this.user1.lastname,
          "businesstype": ["Fashion_Clothing", "Appliance_Grocery_Dining"],
          "RoleName": this.user1.role,
          "DOB": this.user1.DOB,
          "description": "This is for description of a teacher"
        }
      }
    }
    console.log(temp)
    var temp1= {'parameters':{'user':{'authid':'merry102','password':'wjy123456','usertype':'SUPPLIER','email':'2858860124@qq.com','wechat':'a1234567','yearsofbusiness':'999','phone':'','firstname':'wang','lastname':'jinyu',businesstype:['Fashion_Clothing','Appliance_Grocery_Dining'],'RoleName':'partner','DOB':'01-12-1981','description':'This is for description of a teacher'}}}
   
    console.log(temp1)
    this.http.post(api1+JSON.stringify(temp), httpOptions).subscribe(
      (res) => {
        console.log(res);
      }
    ); 
  }
}