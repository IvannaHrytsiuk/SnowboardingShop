import { Injectable } from '@angular/core';
import { AdmTeam } from '../interfaces/team-admin.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamAdminService {
  allTeam:Array<AdmTeam> = [
    {
      id: 1,
      name: "Morgan Freeman",
      description:"He worked and trained with ESF Courchevel 1850 and went on to complete the BASI Level 4 International Ski Teaching Diploma at 23 enabling him to gain his full French equivalence. Not content with holding the highest level of instructor qualification on skis he went on to do the same on a snowboard and is one of a very small number of instructors to do so. After a many years of playing in the snow Matt decided to get a 'proper job' and joined the Army, commissioning from the Royal Military Academy Sandhurst. He never really left the mountains however and was able to race, coach and instruct for the Army as well as the occasional busman's holiday back to the Three Valleys to teach with the Snowlimits team. Having decided that life in the mountains, and sliding around with people like you is more fun than a 'proper job', Matt is now back in the mountains full time heading up our snowboard school bringing his vast technical knowledge and ability to teach all ages and any level to help you get the most from your time on snow, whether you are on 1 plank or 2!",
      fact:"Matt started skiing at 4",
      image:"https://firebasestorage.googleapis.com/v0/b/snowshop-829da.appspot.com/o/images%2FAndy.jpg?alt=media&token=f1d4a256-7657-4ff0-a35a-9fd0fe13243a"
    }
  ];
  private url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/teams';
  }

  getAllTeam():Array<AdmTeam>{
    return this.allTeam;
  }
  

  getJSONAllTeam(): Observable<Array<AdmTeam>>{
    return this.http.get<Array<AdmTeam>>(this.url);
  }
  addJSONTeam(team: AdmTeam):Observable<Array<AdmTeam>>{
    return this.http.post<Array<AdmTeam>>(this.url, team);
  }
  deleteJSONTeam(id: number):Observable<Array<AdmTeam>>{
    return this.http.delete<Array<AdmTeam>>(`${this.url}/${id}`);
  }
  updateJSONTeam(teams: AdmTeam):Observable<Array<AdmTeam>>{
    return this.http.put<Array<AdmTeam>>(`${this.url}/${teams.id}`, teams);
  }
  getJSONMember(id:number):Observable<AdmTeam>{
    return this.http.get<AdmTeam>(`${this.url}/${id}`);
  }
}
