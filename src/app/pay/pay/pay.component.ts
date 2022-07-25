import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(public http: HttpClient,public datePipe:DatePipe) { }



  public Txntime:string ="";
  public TxnAmt:any=1;
  public Orderid:string="";
  ngOnInit(): void {

    this.Txntime+=this.datePipe.transform(new Date(), 'yyyyMMddHHmmss');
    this.Orderid=this.Txntime+123;
  }

  postorder1() {
    const formData = new FormData();
  
   formData.append('OrderId', this.Orderid);
    formData.append('TxnAmt', this.TxnAmt);//总价
     formData.append('FrontUrl', "https://api.3d.ebarter.cn/unionpay/frontconsume62return");



    formData.append('TxnTime', this.Txntime)
   
   formData.append('CurrencyCode', "156");
//    formData.append('PayTimeout',this.Txntime);
    formData.append('BackUrl', "http://*/notify/unionpay/frontconsume62");
 
        

    const httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) };
    var qapi = "https://api.3d.ebarter.cn/UnionPay/FrontConsume62";

    this.http.post(qapi, formData, { responseType: 'text' }).subscribe((response: any) => {
      console.log(response);
      const div = document.createElement('divform');
      div.innerHTML = response; // data就是接口返回的form 表单字符串
      document.body.appendChild(div);//在body里加一个项目div
      document.forms[0].acceptCharset = 'utf-8';
      document.forms[0].setAttribute('target', '_blank');// 新开窗口跳转
   //   document.forms['submit'].submit();
    });
  }
}
