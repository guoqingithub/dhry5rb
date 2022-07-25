import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-user-list',
  templateUrl: './task-user-list.component.html',
  styleUrls: ['./task-user-list.component.css']
})
export class TaskUserListComponent implements OnInit {
  dataSource:any;
  displayedColumns: string[] = ['userid', 'username','usertype', 'edit'];
  taskuserlist:any=[];
  index:any = 0 ;
  constructor(public router: Router,public http:HttpClient) { }

  ngOnInit(): void {
    var list:any;

    this.getTaskUserList().subscribe((response:any)=>{
      list=response;
      console.log(response);
      var listLength = list.length;
      
      for(let i=0;i<listLength;i++){
        var item:any={
          userid:'',
          username:'',
          usertype:'',
          edit:'Edit'
        }
        item.userid=list[i].id;
        item.username=list[i].userName;
        item.usertype=list[i].userType;
        this.taskuserlist.push(item);
       
      }
      this.dataSource=this.taskuserlist;
    });
  }

  getTaskUserList(){//getuser
    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskUser?id={"parameters":{"taskID":"5"}}';
    return this.http.get(api).pipe();
  }
}
