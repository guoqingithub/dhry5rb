import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  dataSource:any;
  displayedColumns: string[] = ['taskid', 'taskname','progress', 'edit'];
  tasklist:any=[];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    var list:any;
    this.getTaskList().subscribe((response:any)=>{
      list=response;
      console.log(response);
      var listLength = list.length;  
      for(let i=0;i<listLength;i++){
        var item:any={
          taskid:'',
          taskname:'',
          progress:'',
          edit:'Edit'
        }
        item.taskid=list[i].id;
        item.taskname=list[i].name;
        item.progress=list[i].progress;
        this.tasklist.push(item);
      }
      
      this.dataSource=this.tasklist;
    });
  }
  getTaskList(){//getuser
    let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskAllByProjectID?id={"parameters":{"projectID":"4"}}';
    return this.http.get(api).pipe();
  }
}
