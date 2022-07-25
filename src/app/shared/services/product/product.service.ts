import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, retry } from 'rxjs/internal/operators';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public content:string="";
  public inventory:any;
  public price:any;
  public ownerid:any;
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




    //增加商品
    addProduct(Conetent: any, Price: any, Inventory: any, Ownerid: any ): Observable<any> {

      var jsoncontent = JSON.stringify(Conetent)
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        var temp = {
          parameters: {
            content: jsoncontent, price: Price, inventory: Inventory, ownerid: Ownerid }
        };
        console.log(JSON.stringify(temp));
        return this.http.post(this.uri + 'Product/CreateProduct?value=' + JSON.stringify(temp), httpOptions).pipe(
          retry(0),
          catchError(this.handleError)
        );
      }
    



}
