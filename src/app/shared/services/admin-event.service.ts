import { Injectable } from '@angular/core';
import { AdmEvent } from '../interfaces/admin-event.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminEventService {
  events:Array<AdmEvent> =
   [
    // {
    //   id:1,
    //   name:"TOMORROWLAND WINTER 2021",
    //   date:'8:00am 20 Mar - 11:30pm 27 Mar, 2021',
    //   type:['Music', 'Skiing', 'Snowboadring'],
    //   video:'https://youtu.be/Q0nhJ3_fpIc',
    //   location:"Alpe d’Huez, France",
    //   slogan:'The ultimate party on the piste',
    //   description:'You may have heard of the infamous Tomorrowland festival located in Belgium, but the creative storyline of this world-loving, major brand, is about to travel to the frosty mountains. That’s right, the upcoming Tomorrowland chapter of “The Hymn Of The Frozen Lotus” transports the festival to all new territory.2021 is the year to witness what could potentially be the most creative and magical scene yet, set in the mesmerizing French Alps. For an event as large and as popular as Tomorrowland, you know from the word “winter” that this is going to be one crazy ride.',
    //   image:'https://firebasestorage.googleapis.com/v0/b/snowshop-829da.appspot.com/o/images%2Fetommorowlend.jpg?alt=media&token=55d53f5e-d770-4710-98c2-d437d78f26bc',
    //   wear:'The weather in France is cold at this time of the year. Wear comfortable shoes for walking through the snow and crowds. Put on layers as it can get hot at the indoor venues. Fancy dress is not mandatory but you’ll have more fun wearing it.',
    //   pack:'Take warm clothes, sunnies and a good camera to capture the action unfold in front of you.',
    //   ticket:'Tickets are purchased as a package that includes a 4- or 7-night stay with accommodation, festival access, and a lift pass for the duration included in the price. ',
    //   toDo:'The ski resort of Alpe d’Huez is fantastic for beginners and advanced skiers/boarders. There are over 80 lifts on the mountain with over 110 runs from green runs (beginner slopes) to black runs (advanced slopes).At the top of the mountain, you can find two snowparks along with a halfpipe and a boardercross park. The skiing area covers 10,000 hectares of mountain space and has an altitude of up to 3330m.Depending on the time in which you visit Alpe d’Huez there are regular ski races, comedy festivals, and motor racing on ice events as well as the opportunity for off-piste skiing/boarding and paragliding.Aside from enjoying the powder on the mountain, you can also expect a great nightlife scene. The French Alps favorite, La Folie Douce is always jumping offering a range of music and entertainment.Through the town, the bars show all types of live sports and provide drink promotions and live music. If you still have enough energy after all of that you could test your skills on the town’s ice rink or head straight to the clubs and party till dawn.',
    //   get:'Alpe d’Huez is situated in the western French Alps. Chambery Airport and Grenoble Airport are around 120km away from Alpe d’Huez. Airport transfers can cost hundreds of euros, however, Tomorrowland Winter are arranging a festival bus.',
    //   site:'https://www.tomorrowland.com/en/winter/welcome-2',
    // }
  ]
  private url:string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/events';
   }
   getEvents():Array<AdmEvent>{
    return this.events;
  }

  getJSONEvents(): Observable<Array<AdmEvent>>{
    return this.http.get<Array<AdmEvent>>(this.url);
  }
  addJSONEvents(events: AdmEvent):Observable<Array<AdmEvent>>{
    if (!Array.isArray(events.type)) {
      let type = <string>events.type;
      events.type = type.split(',');
  }
    return this.http.post<Array<AdmEvent>>(this.url, events);
  }
  deleteJSONEvents(id: number):Observable<Array<AdmEvent>>{
    return this.http.delete<Array<AdmEvent>>(`${this.url}/${id}`);
  }
  updateJSONWEvents(events: AdmEvent):Observable<Array<AdmEvent>>{
    if (!Array.isArray(events.type)) {
      let type = <string>events.type;
      events.type = type.split(',');
  }
    return this.http.put<Array<AdmEvent>>(`${this.url}/${events.id}`, events);
  }
  getJSONOneEvents(id:number):Observable<AdmEvent>{
    return this.http.get<AdmEvent>(`${this.url}/${id}`)
  }
}
