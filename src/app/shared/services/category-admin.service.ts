import { Injectable } from '@angular/core';
import { AdmCategory } from '../interfaces/category-admin.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdminService {
  allCategory:Array<AdmCategory> = [
    {
      id: 1,
      categoriesName: "Men's",
    }
  ];
  private url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/categories';
   }
  
   getAllCategory():Array<AdmCategory>{
    return this.allCategory;
  }
  

  getJSONAllCategories(): Observable<Array<AdmCategory>>{
    return this.http.get<Array<AdmCategory>>(this.url);
  }
  addJSONCategory(category: AdmCategory):Observable<Array<AdmCategory>>{
    return this.http.post<Array<AdmCategory>>(this.url, category);
  }
  deleteJSONCategory(id: number):Observable<Array<AdmCategory>>{
    return this.http.delete<Array<AdmCategory>>(`${this.url}/${id}`);
  }
  updateJSONCategory(category: AdmCategory):Observable<Array<AdmCategory>>{
    return this.http.put<Array<AdmCategory>>(`${this.url}/${category.id}`, category);
  }
}
