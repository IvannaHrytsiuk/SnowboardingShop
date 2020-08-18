import { Injectable } from '@angular/core';
import { RegUser } from '../interfaces/register-user.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  users:Array<RegUser> = [
    {
      id:1,
      firstName: "Ivanna",
      lastName: "Hrytsiuk",
      email: "admin@gmail.com",
      password: "admin123"
    }
  ]
  private url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/users';
   }

  getUsers():Array<RegUser>{
    return this.users;
  }

  getJSONUsers(): Observable<Array<RegUser>>{
    return this.http.get<Array<RegUser>>(this.url);  
  }

  addJSONUser(user: RegUser):Observable<Array<RegUser>>{
    return this.http.post<Array<RegUser>>(this.url, user);
  }

  deleteJSONUser(email: string):Observable<Array<RegUser>>{
    return this.http.delete<Array<RegUser>>(`${this.url}/${email}`);
  }

  updateJSONUser(user: RegUser):Observable<Array<RegUser>>{
    return this.http.put<Array<RegUser>>(`${this.url}/${user.email}`, user);
  }
  getJSONOneUser(id:number):Observable<RegUser>{
    return this.http.get<RegUser>(`${this.url}/${id}`)
  }
  getJSONUserFromEmail(email:string):Observable<RegUser>{
    return this.http.get<RegUser>(`${this.url}/?email=${email}`)
  }
}
