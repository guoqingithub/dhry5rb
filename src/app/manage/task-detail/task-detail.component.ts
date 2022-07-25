import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}; 
@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})

export class TaskDetailComponent implements OnInit {

  constructor(public http:HttpClient) { }
  ID:any;
  Name:any;
  Progress:any;
  State:any;
  ProjectID:any;
  Finished:any;
  BeginTime:any;
  EndTime:any;
  Description:any;
  Note:any;
  list:any=[];
  
  ngOnInit(): void {
    this.gettaskdetail().subscribe((response:any)=>{
      console.log(response);
      this.list = response;
      var i=0;
      this.ID=this.list.id;
      this.ProjectID=this.list.projectID;
      this.Name=this.list.name;
      this.Progress=this.list.progress;
      this.State=this.list.state;
      this.BeginTime=this.list.beginTime;
      this.EndTime=this.list.endTime;
      this.Description=this.list.description;
      this.Note=this.list.note;
     
      });
     
  }
  update()
    {
      this.ID=prompt("Please input the new id",this.ID); 
    }
    update1()
    { 
      this.Name=prompt("Please input the new name",this.Name);
    }
    update2()
    {
      this.Progress=prompt("Please input the new progress",this.Progress);
    }
    update3()
    {
      this.State=prompt("Please input the new state",this.State); 
    }
    update4()
    {
      this.ProjectID=prompt("Please input the new projectID",this.ProjectID); 
    }
    update6()
    {
      this.BeginTime=prompt("Please input the new begintime",this.BeginTime); 
    }
    update7()
    {
      this.EndTime=prompt("Please input the new endtime",this.EndTime); 
    }
    update8()
    {
      this.Description=prompt("Please input the new description",this.Description); 
    }
    update9()
    {
      this.Note=prompt("Please input the new note",this.Note); 
    }
  gettaskdetail()
  {
   
      let uri='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskByID?id={"parameters":{"taskID":"13"}}';  
      return this.http.get(uri).pipe();
  }
  Puttask() {
    let uri='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/';
     var temp = 
     {"parameters":{"taskID":this.ID,"name":this.Name,"progress":this.Progress,"beginTime":this.BeginTime,"endTime":this.EndTime,"description":this.Description,"state":this.State,"note":this.Note,"projectID":"4",}};
     this.http.put(uri+'project/UpdateTask?value='+JSON.stringify(temp),httpOptions).subscribe((response:any)=>{
       console.log(response);
     });
   }
}
