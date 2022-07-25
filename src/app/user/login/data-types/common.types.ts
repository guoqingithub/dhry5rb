//base64.ts文件用到
export interface AnyJson {
    [key:string]:any;
}
export interface SampleBack extends AnyJson{
    code: number;
}