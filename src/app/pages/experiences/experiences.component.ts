import { Component, OnInit } from '@angular/core';
import { AdminEventService } from 'src/app/shared/services/admin-event.service';
import { AdmEvent } from 'src/app/shared/interfaces/admin-event.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
events:Array<AdmEvent> = [];
snow:AdmEvent;
tomorrow:AdmEvent;
rave:AdmEvent;
  constructor( private eventsService: AdminEventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  private getEvents():void{
    this.eventsService.getJSONEvents().subscribe(
      data => {
        this.events = data;
        this.snow = this.events[3];
        this.tomorrow = this.events[0]
        this.rave = this.events[6]
      },
      err => {
        console.log(err);
      }
    )
  }
}
