import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-really-fresh',
  templateUrl: './really-fresh.component.html',
  styleUrls: ['./really-fresh.component.css']
})
export class ReallyFreshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  siblings (context:any) {
    var siblings = [];
    var parent = context.parentNode;  /*获得父节点*/
    var childs = parent.children;/*获得父节点的所有孩子节点*/
    for(var i = 0; i < childs.length;i++){
        if (childs[i] !== context){   //去除当前节点自己
            siblings.push(childs[i])
        }
    }
    return siblings ;
}

  addClass(e:any){
    var currentElem = e.srcElement  //当前元素li
    console.log(currentElem );
    console.log(listbox );
    var listbox:any =  document.getElementById('list_box')//元素list_box
    console.log(listbox );
    var searchlist:any= listbox.children
    console.log(searchlist );
    // console.log(searchlist);

    for(var i = 0; i < searchlist.length;i++){
      if ( searchlist[i].id !== currentElem.id+'Sear'){ 
        searchlist[i].className= 'Notavtivate'
      }else{searchlist[i].className= ''}
    }

    //当前点击事件的元素添加className='ON，清除所有兄弟节点的className
    currentElem.className='on'
    var siblings = this.siblings(currentElem)//当前点击事件的元素的所有兄弟节点
    for(var i = 0; i < siblings.length;i++){
      siblings[i].className = '';                                                                                                                         
    }
  }
 
  

}



