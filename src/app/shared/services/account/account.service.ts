import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, retry } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  public uri = "http://threedroplets-dev.cn-north-1.eb.amazonaws.com.cn/api/";

  // Error handling
  handleError(error:any) {
    console.log(error);
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  //将上传的图片变成可读的Url
  getReader(resolve: any, reject: any) {
    let reader = new FileReader();
    reader.onload = this.Onload(reader, resolve);
    reader.onerror = this.OnError(reader, reject);
    return reader;
  }
  readAsDataUrl(file: any) {
    let that = this;
    return new Promise(function (resolve, reject) {
      let reader = that.getReader(resolve, reject);
      reader.readAsDataURL(file);
    })
  }


  Onload(reader: FileReader, resolve: any) {
    return () => {
      resolve(reader.result);
    }
  }

  OnError(reader: FileReader, reject: any) {
    return () => {
      reject(reader.result);
    }
  }


  //上传图片
  postImg(f: any): Observable<any> {
    return this.http.post<any>(this.uri+'Image/UploadImages', f).pipe(
      retry(0),
      catchError(this.handleError)
    )
  }

}
