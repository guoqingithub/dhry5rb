/*说明：由于登录和注册分别使用不同的方式定义了User，导致User重复，因此将注册中的User改为User1 */

import { StringLiteral } from 'typescript';

export interface User1 {
    username: string; // required, must be 5-8 characters
    firstname: string;
    lastname:string;
    email: string; // required, must be valid email format
    password: string; // required, value must be equal to confirm password.
    confirmPassword: string; // required, value must be equal to password.
    invitation:string;//邀请码
    phonenumber:string;//电话号码
    company:string;//企业信息
    country:string;
    province:string;
    city:string;
    usertype:string;
    role:string;
    message:string;
    wechat:string;
    DOB:string;
    address:string;
}