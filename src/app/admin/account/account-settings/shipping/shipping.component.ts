import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.getdata1();
    this.getdata2();
    //this.getdata5();
    //this.getdata6();



  }
  
  public username:string="";
  
  public list1!:Object;
  public list2!:Object;
  public list3!:Object;
  public list4!:Object;
  public list5!:Object;
  public list6!:Object;
  getdata1(){//GetDefaultAddress
 //let api="http://test.loganren.xyz/Fresh/api/product";

    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/GetDefaultAddress?id={"parameters":{"acountid":"1"}}';
    this.http.get(api).subscribe(Response=>{
      console.log(Response);
      this.list1=Response;
      this.username=Object(this.list1).firstname;
      
    })
  }
  getdata2(){//GetShippingAddresses
    //let api="http://test.loganren.xyz/Fresh/api/product";
   
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/GetShippingAddresses?id={"parameters":{"accountid":"1"}}';
       this.http.get(api).subscribe(Response=>{
         console.log(Response);
         this.list2=Response;
         this.username=Object(this.list2).nickname;
         console.log(this.username)
       })
     }
   
     put1()//UpdateShippingAddress
     {
       this.http.put('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/UpdateShippingAddress?value={"parameters":{"addressID":"9","long":"73","lat":"40.3","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}}',
      
     {"parameters":{"addressID":"9","long":"73","lat":"40.3","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}})
       .subscribe(
           data => {
               console.log(data);
           }
          
       );
    
     }
     post1()//AddShippingAddress
     {
      
       this.http.post('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/AddShippingAddress?value={"parameters":{"accountid":"1","long":"73.99946","lat":"41.373839","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}}',
       {
        "parameters":
        {"parameters":{"accountid":"1","long":"73.99946","lat":"41.373839","street":"3 Time Square","city":"Cross River","state":"New York","country":"USA","zipcode":"10518","contactname":"Charles Li","contactphone":"12021738877"}}
   
       })
       .subscribe(
           data => {
               console.log( data);
           }
          
       );
     }
     
    }
    
            
            
        
        


