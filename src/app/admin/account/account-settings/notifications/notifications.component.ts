import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getdata1();
    this.getdata2();
    //this.getdata5();
    //this.getdata6();



  }
  
  public username:string="";
  payment:any;
  pushservice:any;
  list1:any=[];
 list2:any=[];
 list3:any=[];
 list4:any=[];
 list5:any=[];
 list6:any=[];
  getdata1(){//GetDefaultAddress
 //let api="http://test.loganren.xyz/Fresh/api/product";

    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Notification/GetImPaymentNotification?value={"parameters":{"accountid":"1"}}';
    this.http.get(api).subscribe(Response=>{
      console.log(Response);
      this.list1=Response;
     this.payment=this.list1.immediatePaymentNotification;
    })
  }
  getdata2(){//GetShippingAddresses
    //let api="http://test.loganren.xyz/Fresh/api/product";
   
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Notification/GetPushServiceNotification?value={"parameters":{"accountid":"1"}}';
       this.http.get(api).subscribe(Response=>{
         console.log(Response);
         this.list2=Response;
         this.pushservice=this.list2.pushServiceNotification;
       })
     }
   
     put1()//UpdateShippingAddress
     {
       this.http.put('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Notification/UpdateImPaymentNotification?value={"parameters":{"accountid":"1","impaynoti":"N"}}',
      
    
{"parameters":{"accountid":"1","impaynoti":"N"}})
       .subscribe(
           data => {
               console.log(data);
           }
          
       );
    
     }

     put2()//UpdateShippingAddress
     {
       this.http.put('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Notification/UpdatePushServiceNotification?value={"parameters":{"accountid":"1","pushservicenoti":"N"}}',
      
   
{"parameters":{"accountid":"1","pushservicenoti":"N"}})
       .subscribe(
           data => {
               console.log(data);
           }
          
       );
    
     }
     
    }
    
            
            
        
        
