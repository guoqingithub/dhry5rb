import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-home',
  templateUrl: './project-home.component.html',
  styleUrls: ['./project-home.component.css']
})
export class ProjectHomeComponent implements OnInit {
  dataSource:any;
  dataSource1:any;
  dataSource2:any;
  displayedColumns: string[] = ['finishid', 'finishname','finishprogress', 'finishbegin','finishend','edit'];
  displayedColumns1: string[] = ['unfinishid', 'unfinishname','unfinishprogress', 'unfinishbegin','unfinishend','Edit'];
  displayedColumns2: string[] = ['questionid', 'questionname','questionprogress', 'questionbegin','questionend','ediT'];
  finishlist:any=[];
  unfinishlist:any=[];
  questionlist:any=[];
  index:any = 0 ;
  list:any=[];
  total:any;
  finished:any;
  unfinished:any;
  questioned:any;
  constructor(public router: Router,public http:HttpClient) { }

  ngOnInit(): void {
    var list:any;
    var list1:any;
    var list2:any;
    this.getfinished().subscribe((response:any)=>{
      list=response;
      console.log(response);
      var listLength = list.length;
      
      for(let i=0;i<listLength;i++){
        var item:any={
          ID:'',
          Name:'',
          Progress:'',
          Start:'',
          End:'',
          Edit:'Edit'
        }
        item.ID=list[i].id;
        item.Name=list[i].name;
        item.Progress=list[i].progress;
        item.Start=list[i].beginTime;
        item.End=list[i].endTime;
        this.finishlist.push(item);
       
      }
      this.dataSource=this.finishlist;
    });
    this.getunfinished().subscribe((response:any)=>{
      list1=response;
      console.log(response);
      var list1Length = list1.length;
      
      for(let i=0;i<list1Length;i++){
        var item:any={
          id:'',
          name:'',
          progress:'',
          start:'',
          end:'',
          Edit:'Edit'
        }
        item.id=list1[i].id;
        item.name=list1[i].name;
        item.progress=list1[i].progress;
        item.start=list1[i].beginTime;
        item.end=list1[i].endTime;
        this.unfinishlist.push(item);
       
      }
      this.dataSource1=this.unfinishlist;
    });
    this.getquestion().subscribe((response:any)=>{
      list2=response;
      console.log(response);
      var list2Length = list2.length;
      
      for(let i=0;i<list2Length;i++){
        var item:any={
          iD:'',
          namE:'',
          progresS:'',
          starT:'',
          enD:'',
          Edit:'Edit'
        }
        item.iD=list2[i].id;
        item.namE=list2[i].name;
        item.progresS=list2[i].progress;
        item.starT=list2[i].beginTime;
        item.enD=list2[i].endTime;
        this.questionlist.push(item);
       
      }
      this.dataSource2=this.questionlist;
    });
    this.getnum().subscribe((response:any)=>{
      console.log(response);
      this.list = response;
      var i=0;
      this.total=this.list.total;
      this.finished=this.list.finished;
      this.unfinished=this.list.unfinished;
      this.questioned=this.list.questioned;
     
      });
  }
  getfinished(){//getuser
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskFinished?id={"parameters":{"projectid":"4"}}';
       return this.http.get(api).pipe();
     }
     getunfinished(){//getuser
      let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskUnfinished?id={"parameters":{"projectid":"4"}}';
      return this.http.get(api).pipe();
    }
    getquestion(){//getuser
      let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetTaskQuestioned?id={"parameters":{"projectid":"4"}}';
      return this.http.get(api).pipe();
    }
     detail()
     {
        this.router.navigate(['/side-bar/project-detail'],{queryParams:{id:this.index.projectid}});
     } 
     getnum(){//getuser
      let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetProjectTaskNum?id={"parameters":{"projectid":"4"}}';
      return this.http.get(api).pipe();
    }
}

