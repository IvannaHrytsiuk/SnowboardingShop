import { Component, OnInit } from '@angular/core';
import { AdmEvent } from 'src/app/shared/interfaces/admin-event.interface';
import { AdminEventService } from 'src/app/shared/services/admin-event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:Array<AdmEvent> = [];

  constructor(private eventsService: AdminEventService,) { }

  ngOnInit(): void {
    this.getEvents();
  }
  private getEvents():void{
    this.eventsService.getJSONEvents().subscribe(
      data => {
        this.events = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
