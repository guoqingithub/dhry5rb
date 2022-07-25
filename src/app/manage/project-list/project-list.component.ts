import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
 
  dataSource:any;
  displayedColumns: string[] = ['projectid', 'projectname','type', 'creatid','edit'];
  projectlist:any=[];
  index:any = 0 ;
  constructor(public router: Router,public http:HttpClient) { }

  ngOnInit(): void {
    var list:any;

    this.getProjectList().subscribe((response:any)=>{
      list=response;
      console.log(response);
      var listLength = list.length;
      
      for(let i=0;i<listLength;i++){
        var item:any={
          projectid:'',
          projectname:'',
          type:'',
         finished:'',
          edit:'Edit'
        }
        item.projectid=list[i].id;
        item.projectname=list[i].projectName;
        item.type=list[i].type;
        item.finished=list[i].finished;
        this.projectlist.push(item);
       
      }
      this.dataSource=this.projectlist;
    });
  }
  getProjectList(){//getuser
       let api='http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/project/GetProjectAll';
       return this.http.get(api).pipe();
     }
     detail()
     {
        this.router.navigate(['/side-bar/project-detail'],{queryParams:{id:this.index.projectid}});
     } 
}
