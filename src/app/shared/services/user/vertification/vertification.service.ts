import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VertificationService {

   public msg_id:any =''; 
    public reply1:any ={};
    public reply2:boolean=true;

  sendURL='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Message/SendMessage?tel=';
  checkURL='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Message/VerifyMessage?msgId=';

  constructor(private http: HttpClient) { }

  httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          /*'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*'*/
        })
      }
    
      public sendVerification(phonenumber:string){
       this.http.post(this.sendURL+phonenumber,this.httpOptions).subscribe(response => {    
          console.log(response);
          this.reply1=response;
          });      
      }
    
      public checkVerification(code:string){
        this.http.post(this.checkURL+this.reply1.msg_id+"&code="+code,this.httpOptions).subscribe(response => {
          /*console.log(Object.keys(response).map(function (key) {   
            let objkey = response[key];
            let first = Object.keys(objkey)[0]
            return response[key][first];
            
          })*/
    
      //    console.log(response[Object.keys(response)[0]]);
        ///  this.reply2 = response[Object.keys(response)[0]];
         // console.log("this is repyl2"+this.reply2);
          //console.log(Object.keys(response)[0]);
          console.log(response);
          
        });
  }
}
