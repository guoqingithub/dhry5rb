import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getdata1();
    this.getdata2();
    this.getdata3();
    this.getdata4();
    this.getdata5();
    this.getdata6();
    this.getdata7();


  }
 id:any;
 username:any;
 password:any;
 role:any;
 usertype:any;
 firstname:any;
 lastname:any;
 nickname:any;
 phone:any;
 email:any;
 street:any;
 city:any;
 state:any;
 country:any;
 list1:any=[];
 list2:any=[];
 list3:any=[];
 list4:any=[];
 list5:any=[];
 list6:any=[];
 list7:any=[];

  getdata1(){//getuser
 //let api="http://test.loganren.xyz/Fresh/api/product";

    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/{"parameters":{"user":{"authid":"kil","password":"shanghai"}}}';
    this.http.get(api).subscribe(Response=>{
      console.log(Response);
      this.list1=Response;
      this.id=this.list1.id;
      this.username=this.list1.userName;
      this.password=this.list1.password;
      this.role=this.list1.role;
      this.usertype=this.list1.userType;
      this.firstname=this.list1.firstName;
      this.lastname=this.list1.lastName;
    
    })
  }
  getdata2(){//get nickname
    //let api="http://test.loganren.xyz/Fresh/api/product";
   
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetNickName/{"parameters":{"authid":"kil"}}';
       this.http.get(api).subscribe(Response=>{
         console.log(Response);
         this.list2=Response;
         this.nickname=this.list2.nickName;
       })
     }
     getdata3(){//getphonenumber
      //let api="http://test.loganren.xyz/Fresh/api/product";
     
         let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetPhoneNumber?authID={"parameters":{"authid":"kil"}}';
         this.http.get(api).subscribe(Response=>{
           console.log(Response);
           this.list3=Response;
           this.phone=this.list3.phonenumber;
         })
       }
       getdata4(){//GetExactUserRole
        let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetUserRole';
        this.http.get(api).subscribe(Response=>{
          console.log(Response);
          this.list4=Response;
          this.role=this.list4[0].roleName;
       })
      }
         getdata5(){//GetAddresses 
          //let api="http://test.loganren.xyz/Fresh/api/product";
         
             let api='http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/GetAddresses?id={"parameters":{"authid":"kil"}}';
             this.http.get(api).subscribe(Response=>{
               console.log(Response);
               this.list5=Response;  
              this.street=this.list5[0].street;
              this.city=this.list5[0].city;
              this.state=this.list5[0].state;
              this.country=this.list5[0].country;
          
             })
           }
           getdata6(){//GetDefaultAddress
            //let api="http://test.loganren.xyz/Fresh/api/product";
           
               let api='http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/GetDefaultAddress?id={"parameters":{"authid":"kil"}}';
               this.http.get(api).subscribe(Response=>{
                 console.log("GetDefaultAddress Request is successful ",Response);
                 this.list6=Response;
                 this.username=Object(this.list2).firstname;
            
               })
             }
             getdata7(){//getuseremail
              //let api="http://test.loganren.xyz/Fresh/api/product";
             
                 let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/User/GetUserEmail?value={"parameters":{"authid":"kil"}}';
                 this.http.get(api).subscribe(Response=>{
                   console.log(Response);
                   this.list7=Response;
                  this.email=this.list7[0].email;
                 })
               }
     put1()//SetNickName
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetNickName/{"parameters":{"newNickName":"cli123","oldNickName":"kil"}}',
       {
        "parameters":{"newNickName":"cli123","oldNickName":"kil"}
       })
       .subscribe(
           data => {
               console.log("SetNickName Request is successful ", data);
           }
          
       );
    
     }
     put2()//SetFirstName
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetFirstName?value={"parameters":{"authid":"kil","FirstName":"HName"}}',
       {
        "parameters":{"authid":"kil","FirstName":"HName"}
       })
       .subscribe(
           data => {
               console.log("SetFirstName Request is successful ", data);
           }
          
       );
     }
     put3()//UpdateUserRole
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/user/UpdateUserRole?value={"parameters":{"AuthID":"kil","RoleName":"admin","RoleNameOld":"partner"}}',
       {
        "parameters":{"AuthID":"kil","RoleName":"admin","RoleNameOld":"partner"}
       })
       .subscribe(
           data => {
               console.log("UpdateUserRole Request is successful ", data);
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
     put7()//ResetPassword
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/ResetPassword?authID={"parameters":{"authid":"kil","password":"shanghai"}}',
       {
        "parameters":{"authid":"kil","password":"shanghai"}
       })
       .subscribe(
           data => {
               console.log("ResetPassword Request is successful ", data);
           }
          
       );
     }
     put8()//UpdateAddress
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/UpdateAddress?value={"parameters":{"addressID":"2","long":"73","lat":"40.3","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}}',
       {
        "parameters":{"addressID":"2","long":"73","lat":"40.3","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}
       })
       .subscribe(
           data => {
               console.log("UpdateAddress Request is successful ", data);
           }
          
       );
     }
     put9()//SetDefaultAddress
     {
       this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetDefaultAddress?value={"parameters":{"authid":"kil","addressid":"5"}}',
       {
        "parameters":{"authid":"kil","addressid":"5"}
       })
       .subscribe(
           data => {
               console.log("SetDefaultAddress Request is successful ", data);
           }
          
       );
     }
     
    }
    
            
            
        
        



