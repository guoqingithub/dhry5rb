import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';

export interface Tile {
  id:any;
  content: string;
  price:any;
  inventory:string;
  }
  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    }
    const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
    ];
    
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


//  public dataSource:any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  tiles: Tile[] = [];



  constructor(public http:HttpClient) { }

  public content:string="";
  public inventory:string="";
  public price:any;
  public ownerid:any;

  ngOnInit(): void {

    var list:any;
    let api="http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/Product/GetProductAll";
    this.http.get(api).subscribe(
      (res) => {
        console.log(res);
        list=res;
        var listLength=list.length;
        for(var i=0;i<listLength;i++){
            var item:any={
              id:0,
              content:'',
              price:0,
              inventory:''
           }
          item.id=list[i].id;
          item.content=list[i].content;
          item.price=list[i].price;
          item.inventory=list[i].inventory;
          this.tiles.push(item);
        }                                                                  
      },
      );
  }
}

