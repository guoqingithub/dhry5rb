import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-user-list',
  templateUrl: './project-user-list.component.html',
  styleUrls: ['./project-user-list.component.css']
})
export class ProjectUserListComponent implements OnInit {
  dataSource:any;
  displayedColumns: string[] = ['userid', 'username','usertype', 'edit'];
  projectuserlist:any=[];
  index:any = 0 ;
  constructor(public router: Router,public http:HttpClient) { }

  ngOnInit(): void {
    var list:any;

    this.getProjectUserList().subscribe((response:any)=>{
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
        this.projectuserlist.push(item);
       
      }
      this.dataSource=this.projectuserlist;
    });
  }

  getProjectUserList(){//getuser
    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetProjectUser?id={"parameters":{"projectID":"9"}}';
    return this.http.get(api).pipe();
  }
}
