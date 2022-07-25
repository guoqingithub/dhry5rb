import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-log-and-sec',
  templateUrl: './log-and-sec.component.html',
  styleUrls: ['./log-and-sec.component.css']
})
export class LogAndSecComponent implements OnInit {

  constructor(public http:HttpClient) { }
  type:any;
  question:any;
  email:any;
  role:any;
  phone:any;
  ngOnInit(): void {
    this.getdata1();
    this.getdata2();
    this.getdata3();
    this.getdata4();
    this.getdata5();
  }
  list1:any=[];
  list2:any=[];
  list3:any=[];
  list4:any=[];
  list5:any=[];
  list6:any=[];

  
  getdata1(){//getSecretQuestion
    //let api="http://test.loganren.xyz/Fresh/api/product";
   
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetSecretQuestion?id={"parameters":{"authid":"kil"}}';
       this.http.get(api).subscribe(Response=>{
         console.log(Response);
         this.list1=Response;
         this.question=this.list1[0].question;
         
       })
     }
     getdata2(){//getuseremail
      let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetUserEmail?value={"parameters":{"authid":"kil"}}';
      this.http.get(api).subscribe(Response=>{
        console.log(Response);
        this.list2=Response;
        this.email=this.list2[0].email;
     })
    }
     getdata3(){//GetExactUserRole
      let api='http://localhost:5001/api/User/GetExactUserRole?id={"parameters":{"userid":"2"}}';
      this.http.get(api).subscribe(Response=>{
        console.log(Response);
        this.list3=Response;
        this.role=this.list3.roleName;
     })
    }
     getdata4(){//getaccount
      //let api="http://test.loganren.xyz/Fresh/api/product";
     
         let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/GetAccount?id={"parameters":{"authid":"kil"}}';
         this.http.get(api).subscribe(Response=>{
           console.log(Response);
           this.list4=Response;
           this.type=this.list4[0].type;
      
         })
       }
       getdata5(){//GetPhone
        let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/{"parameters":{"user":{"authid":"kil","password":"shanghai"}}}';
        this.http.get(api).subscribe(Response=>{
          console.log(Response);
          this.list5=Response;
          this.phone=this.list5.phone;
       })
      }
     post1()//postSecretQuestion
  {
   
    this.http.post('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/PostSecretQuestion?value={"parameters":{"authid":"kil","question":"What'+"'" +'s your mother'+"'" +'s name?","answer":"her"}}',
    {
     "parameters":{"parameters":{"authid":"kil","question":"What's your mother's name?","answer":"her"}}

    })
    .subscribe(
        data => {
            console.log("postSecretQuestion Request is successful ", data);
        }
       
    );
  }
 
  put4()//SetEmail
  {
    this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetEmail?value={"parameters":{"authid":"kil","email":"cli@123"}}',
    {
     "parameters":{"authid":"kil","email":"cli@123"}
    })
    .subscribe(
        data => {
            console.log("SetEmail Request is successful ", data);
        }
       
    );
  }
 
  put5()//SetPhoneNumber
  {
    this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetPhoneNumber?value={"parameters":{"AuthID":"kil","OldPhone":"65432110","NewPhone":"124354"}}',
    {
     "parameters":{"AuthID":"kil","OldPhone":"65432110","NewPhone":"124354"}
    })
    .subscribe(
        data => {
            console.log("SetPhoneNumber Request is successful ", data);
        }
       
    );
  }
 

  put6()//SetPassword
  {
    this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetPassword?value={"parameters":{"authid":"kill","currentpassword":"shanghai","password":"clii"}}',
    {
     "parameters":{"authid":"kill","currentpassword":"shanghai","password":"clii"}
    })
    .subscribe(
        data => {
            console.log("SetPassword Request is successful ", data);
        }
       
    );
  }
}
