import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
// import { Console } from 'console';
//定义产品类接口

export interface Product {
  content: string;  //需要解析的内容（产品介绍、图片地址、产品名称）
  price:any;        //产品价格
  inventory:string; //产品库存
  id:any;           //产品id    
  }

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {

  Products: Product[] = [];//存放后台读取的产品信息
  ContentParse:any=[];     //对产品部分内容进行解析
 

  public IsAdmin:boolean=true;
  public imageUrl: any;
  public imageList: any[] = [];
  cardStages: any[] = [];
  imgDatas: any[] = [];  //解析后的imgUrl
  list: any            //后台获得的产品对象数组

  constructor(public http:HttpClient,public router: Router) { }

  ngOnInit(): void {
    let api="http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Product/GetProductAll";
    this.http.get(api).subscribe(
      (res) => {
        //打印后台获得的产品对象数组
        console.log("后台获得的产品对象数组");
        console.log(res);
        this.list=res;
        var listLength=this.list.length;
        for(var i=0;i<listLength;i++){
            var item:any={
              price:0,
              inventory:'',
              id:0,
              ProductIntruduction:'',
              imgUrl:"",
              ProductName:''
           }
          var stage = "expand_more";
          this.cardStages.push(stage);
          //解析图片的content，（产品介绍、产品的地址、产品名字）
          this. ContentParse[i]=JSON.parse(this.list[i].content.toString());
          var imgUrl = "https://s3.cn-north-1.amazonaws.com.cn/linda-trades-archive-1/" + this. ContentParse[i].ProductAddrBase+ "_0.jpg";
          this.imgDatas.push(imgUrl);
          //读取图片的price、inventory、id、和解析后的图片地址、产品介绍、产品名称。
          item.price=this.list[i].price;
          item.inventory=this.list[i].inventory; 
          item.id=this.list[i].idp;
          item.imgUrl=imgUrl;
          item.ProductIntruduction= this.ContentParse[i].ProductIntruduction
          item.ProductName= this.ContentParse[i].ProductName
          //将解析后获得的产品信息放到roducts对象数组中。
          this.Products.push(item);
          
        } 
        //打印解析后content的内容（产品介绍、图片地址、产品名称）
        console.log("解析后content的内容（产品介绍、图片地址、产品名称:");
        console.log(this.ContentParse);
       //打印解析后获得的产品信息放到products对象数组
       console.log("解析后获得的产品信息放到products对象数组");
        console.log(this.Products);
      },
      );
  }


  OpenProductDetail(){
    console.log('您打开了商品的详细页面')
    this.router.navigate(['/product-detail'], { queryParams: { id: "this.index.companyid" } });
  }
}
