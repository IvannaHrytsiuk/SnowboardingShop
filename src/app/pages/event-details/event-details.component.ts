import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminEventService } from 'src/app/shared/services/admin-event.service';
import { AdmEvent } from 'src/app/shared/interfaces/admin-event.interface';
import { DomSanitizer } from '@angular/platform-browser';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent implements OnInit {
viewEvent:AdmEvent;
viewTime:any;
countDownDate:any;
datestr:any;
datestr1:any;
yearstr:any;
x:any;
now:any;
distance:any;
days:any;
hours:any;
min:any;
sec:any;
count:any;
url:any;
str:string;
lat:any;
lng:any;
@ViewChild('maper') mapElement: any;
maper: google.maps.Map;
  constructor(private route: ActivatedRoute,
    private eventService:AdminEventService,
    private _sanitizer: DomSanitizer) { 
    }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getJSONOneEvents(id).subscribe(
      data =>{
        this.viewEvent = data;
        this.viewTime = this.viewEvent.date;
        this.lat = this.viewEvent.locationLat;
        this.lng = this.viewEvent.locationLng;
        this.timer();
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.viewEvent.video);
        this.str = this.viewEvent.location.substring(0, this.viewEvent.location.indexOf(','));
        const mapProperties = {
          center: new google.maps.LatLng(this.lat, this.lng),
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
     };
     this.maper = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
      }
    )
  }
  
  timer():void{
    this.datestr = this.viewTime.slice(3,6);
    this.datestr1 = this.viewTime.slice(0,2);
    this.yearstr = this.viewTime.slice(18,22);
    this.countDownDate = new Date (this.datestr + ' ' + this.datestr1 + ", " + this.yearstr +' '+ '00:00:00').getTime();
    this.x = setInterval(() => {
      this.now = new Date().getTime();
      this.distance = this.countDownDate - this.now;
      this.days = Math.floor(this.distance / (1000*60*60*24));
      this.hours = Math.floor((this.distance % (1000*60*60*24)) / (1000*60*60));
      this.min = Math.floor((this.distance % (1000*60*60)) / (1000*60));
      this.sec = Math.floor((this.distance % (1000*60)) / 1000);
      if(this.distance <0){
        clearInterval(this.x);
      }
    },1000)
  }
}
