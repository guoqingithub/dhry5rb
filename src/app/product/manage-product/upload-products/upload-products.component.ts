import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { UUID } from 'angular2-uuid';
import { AccountService } from 'src/app/shared/services/account/account.service';
@Component({
  selector: 'app-upload-products',
  templateUrl: './upload-products.component.html',
  styleUrls: ['./upload-products.component.css']
})
export class UploadProductsComponent implements OnInit {

  constructor( public http:HttpClient,public productservice:ProductService,public account: AccountService) { }

//产品的content，（产品介绍、产品的地址、产品名字）
  public Prodcontent:any={
    ProductIntruduction:'',
    ProductAddrBase:'',
    ProductName:'',
  };
  public inventory:string=""; //产品库存
  public price:any;//产品价格
  public ownerid:any;//产品id
  //后台接口UploadImages使用
  addfile: any;
  picAddrBase: any;
  pictype = 'jpg';

  imgData: any;
  picflag = 0;

  ngOnInit(): void {
  }

 //弹出文件框，选择图片
  pushButton(){
    var selectFile = document.getElementById("add");
    if(selectFile)
    selectFile.click();//触发input的change()方法  
  }


 //选择图片后触发input的change绑定的事件函数。
  getPicture(event: any) {
    //打印input改变事件
    console.log('打印input改变事件')
    console.log(event)
    var userid = 'Sue';
    var uuid = UUID.UUID();
    this.picAddrBase = userid + "_" + uuid;;
    //将图片地址base添加到产品内容中
    this.Prodcontent.ProductAddrBase=this.picAddrBase;
    this.addfile = event.target.files[0];//lastmodified、name、size、type
    
    let that = this;
    this.account.readAsDataUrl(event.target.files[0]).then(function (result) {
      that.imgData = result;
    })
    this.picflag=1;
  }


//添加商品
  addproduct(){

    //上传图片信息data到后台并打印上传结果
    var data: FormData = new FormData();
    data.append('pic_base', this.picAddrBase);
    data.append('pic_type', this.pictype);
    data.append('pics', this.addfile);
    //上传图片到服务器的返回信息
    console.log('上传图片信息到服务器的返回信息')
    this.account.postImg(data).subscribe(res => { console.log('img:', res); })
    //验证双向数据绑定是否成功，能否获得前端得到的商品信息赋值给roductservice中的相应变量。
    // console.log(this.inventory);
    // console.log(this.price);
    //上传商品信息到后台并打印上传结果
    this.productservice.addProduct(this.Prodcontent, this.price ,this.inventory, "1").subscribe(
        response => {
           //上传图片到服务器的返回信息
          console.log('上传商品信息到服务器的返回信息')
          console.log(response);
          alert("提交成功！");
          //window.location.reload();
        });


  }
}

  
 

  