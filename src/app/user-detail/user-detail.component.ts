import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  

    constructor(public http:HttpClient,public translateService: TranslateService) { }
  
    public useremail:string="www.sdafa.com";
    
    ngOnInit(): void {
      this.getdata1();
      this.getdata4();
      const browserLang = this.translateService.getBrowserLang();
      this.settingBtn(browserLang);
    }
  timezone:any;
  language1:any;
  type:any;
  list1:any=[];
  list2:any=[];
  list3:any=[];
  list4:any=[];
  list5:any=[];
  list6:any=[];
    getdata1(){//getTimezone
      //let api="http://test.loganren.xyz/Fresh/api/product";
     
         let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/GetAccount?id={"parameters":{"authid":"kil"}}';
         this.http.get(api).subscribe(Response=>{
           console.log(Response);
           this.list1=Response;
           this.timezone=this.list1[0].timeZone;
           this.language1=this.list1[0].language;
           this.type=this.list1[0].type;
         })
       }
       
       getdata4(){//getaccount
        //let api="http://test.loganren.xyz/Fresh/api/product";
       
           let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/GetAccount?id={"parameters":{"authid":"kil"}}';
           this.http.get(api).subscribe(Response=>{
             console.log(Response);
             this.list4=Response;
             
        
           })
         }
    
         post1()//postSecretQuestion
         {
          
           this.http.post('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Message/SendMessage?tel=17854276738',
           {
            "parameters":{"parameters":{"tel":"17854276738"}}
       
           })
           .subscribe(
               data => {
                   console.log("postSecretQuestion Request is successful ", data);
               }
              
           );
         }
   
    put4()//UpdateLanguage
    {
      this.http.put('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/UpdateLanguage?value={"parameters":{"accountId":"1","language":"Chinese"}}',
      {
       "parameters":{"accountId":"1","language":"Chinese"}
      })
      .subscribe(
          data => {
              console.log("UpdateLanguage Request is successful ", data);
          }
         
      );
    }
   
    put5()//UpdateTimeZone
    {
      this.http.put('http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Account/UpdateTimeZone?value={"parameters":{"accountId":"1","timezone":"Japan-Tokyo"}}',
      {
       "parameters":{"accountId":"1","timezone":"Japan-Tokyo"}
      })
      .subscribe(
          data => {
              console.log("UpdateTimeZone Request is successful ", data);
          }
         
      );
    }
   
  
    put6()//Update Customer service message
    {
      this.http.put('http://threeD-prod.cn-north-1.eb.amazonaws.com.cn/api/User/SetPassword?value={"parameters":{"authid":"kill","currentpassword":"shanghai","password":"clii"}}',
      {
       "parameters":{"authid":"kill","currentpassword":"shanghai","password":"clii"}
      })
      .subscribe(
          data => {
              console.log("Update Customer service message Request is successful ", data);
          }
         
      );
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

  }
  