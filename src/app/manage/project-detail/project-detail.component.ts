import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}; 
@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(public http:HttpClient,public router: Router) { }
ID:any;
ProjectName:any;
Type:any;
Description:any;
Note:any;
Finished:any;
BeginTime:any;
EndTime:any;
list:any=[];
  ngOnInit(): void {
    this.getprojectdetail().subscribe((response:any)=>{
      console.log(response);
      this.list = response;
      var i=0;
      this.ID=this.list.id;
      this.ProjectName=this.list.projectName;
      this.Type=this.list.type;
      this.Description=this.list.description;
      this.Note=this.list.note;
      this.Finished=this.list.finished;
      this.BeginTime=this.list.beginTime;
      this.EndTime=this.list.endTime;
     
      });
     
    
  }
  update()
    {
      this.ID=prompt("Please input the new id",this.ID); 
    }
    update1()
    { 
      this.ProjectName=prompt("Please input the new name",this.ProjectName);
    }
    update2()
    {
      this.Type=prompt("Please input the new type",this.Type);
    }
    update3()
    {
      this.Description=prompt("Please input the new description",this.Description); 
    }
    update4()
    {
      this.Note=prompt("Please input the new note",this.Note); 
    }
    update5()
    {
      this.Finished=prompt("Please input the new finished",this.Finished); 
    }
    update6()
    {
      this.BeginTime=prompt("Please input the new begintime",this.BeginTime); 
    }
    update7()
    {
      this.EndTime=prompt("Please input the new endtime",this.EndTime); 
    }
  getprojectdetail()
  {
   
      let uri='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetProject?id={"parameters":{"projectID":"4"}}';  
      return this.http.get(uri).pipe();
  }
  Putproject() {
    let uri='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/';
     var temp = 
     {"parameters":{"projectID":this.ID,"name":this.ProjectName,"type":this.Type,"creatorid":this.Description,"taskNum":this.Note,"finished":this.Finished,"beginTime":this.BeginTime,"endTime":this.EndTime}};
     this.http.put(uri+'project/UpdateProject?value='+JSON.stringify(temp),httpOptions).subscribe((response:any)=>{
       console.log(response);
     });
   }
   project(){ 
      this.router.navigate(['/sidebar/dialog-project-blank']);
  }  
}
