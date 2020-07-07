import { Injectable } from '@angular/core';
import { AdmBlog } from '../interfaces/admin-blog.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminBlogService {
  blogs:Array<AdmBlog> =[];
  private url:string;

 constructor(private http: HttpClient) {
   this.url = 'http://localhost:3000/blogs';
  }
  getPublication():Array<AdmBlog>{
   return this.blogs;
 }
 getJSONPublication(): Observable<Array<AdmBlog>>{
   return this.http.get<Array<AdmBlog>>(this.url);
 }
 addJSONPublication(publication: AdmBlog):Observable<Array<AdmBlog>>{
   return this.http.post<Array<AdmBlog>>(this.url, publication);
 }
 deleteJSONPublication(id: number):Observable<Array<AdmBlog>>{
   return this.http.delete<Array<AdmBlog>>(`${this.url}/${id}`);
 }
 updateJSONPublication(publication: AdmBlog):Observable<Array<AdmBlog>>{
   return this.http.put<Array<AdmBlog>>(`${this.url}/${publication.id}`, publication);
 }
 getJSONOnePublication(id:number):Observable<AdmBlog>{
   return this.http.get<AdmBlog>(`${this.url}/${id}`)
 }
}
