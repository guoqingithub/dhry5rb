// 登录变量定义
export type User = {
      jwtToken:string,
      registration: {
          result: null,
          value: {
              registrationString: {
                parameters:{
                  LogonID:string,
                  Password:string,
                  FirstName:string,
                  MiddleName:string,
                  LastName:String,
                  Longtitude:string
                  Latitude:string,
                  Street:string,
                  City:string,
                  State:string,
                  Country:string,
                  Zipcode:string,
                  UserType:string,
                  buyer:string,
                  Email:string,
                  WeChat:string,
                  ReferenceCode:string,
                  Credit:string,
                  Fee:string,
                  yearsOfBusiness:string,
                  Region:string,
                  Poll:string,
                  LindaPoint:string,
                  LastMTime:string,
                  ID:string,
                  DOB:string,
                  description:string,
                  nickName:string,
                  creationTime:string,
                  BusinessType:string,
                  Book:string,
                  Phone:number,
                  Ext:string,
                  SpecialCategory:string,
                  BusinessTypeDetial:string,
                  AppName:string,
                  RoleName:string,
              token: null,
              logonID: null
            }
          }
        }
      }
    };
    