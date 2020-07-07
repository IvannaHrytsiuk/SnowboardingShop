import { AdmBlog } from '../interfaces/admin-blog.interface';

export class Blogs implements AdmBlog{
    constructor(
    public id:number,
    public title:string,
    public image: string,
    public videoLink:string,
    public textPriview:string,
    public text:string,
    public fontWeight:number,
    public fontFamily:string,
    public fontSize:string,
    public image2:string
    ){}
}