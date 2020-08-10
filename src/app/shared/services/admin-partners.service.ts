import { Injectable } from '@angular/core';
import { AdmPartners } from '../interfaces/admin-partners.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminPartnersService {

  partners:Array<AdmPartners> =[];
  private url:string;

 constructor(private http: HttpClient) {
   this.url = 'http://localhost:3000/partners';
  }
  getPartners():Array<AdmPartners>{
   return this.partners;
 }
 getJSONPartners(): Observable<Array<AdmPartners>>{
   return this.http.get<Array<AdmPartners>>(this.url);
 }
 addJSONPartners(partner: AdmPartners):Observable<Array<AdmPartners>>{
   return this.http.post<Array<AdmPartners>>(this.url, partner);
 }
 deleteJSONPartners(id: number):Observable<Array<AdmPartners>>{
   return this.http.delete<Array<AdmPartners>>(`${this.url}/${id}`);
 }
 updateJSONPartners(partner: AdmPartners):Observable<Array<AdmPartners>>{
   return this.http.put<Array<AdmPartners>>(`${this.url}/${partner.id}`, partner);
 }
}
