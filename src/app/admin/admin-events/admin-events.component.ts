import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminEventService } from 'src/app/shared/services/admin-event.service';
import { AdmEvent } from 'src/app/shared/interfaces/admin-event.interface';
import { Events } from 'src/app/shared/classes/admin-event.model';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.scss']
})
export class AdminEventsComponent implements OnInit {

  admEvents:Array<AdmEvent> = [];
  editStatus:boolean = false;
  eventID:number;
  editEvent?:AdmEvent = null;
  removeEvent:AdmEvent;
  type:Array<any> = [];


  newName:string;
  newDate:string;
  newType:string[];
  newVideo:string;
  newLocation:string;
  newLocationLat:number;
  newLocationLng:number;
  newSlogan:string;
  newDescrip:string;
  newImg:string;
  newWear:string;
  newPack:string;
  newTicket:string;
  newToDo:string;
  newGet:string;
  newSite:string;
  newImg1:string;
  newImg2:string;
  newImg3:string;

  editName:string;
  editDate:string;
  editType:string;
  editVideo:string;
  editLocation:string;
  editLocationLat:number;
  editLocationLng:number;
  editSlogan:string;
  editDescrip:string;
  editImg:string;
  editWear:string;
  editPack:string;
  editTicket:string;
  editToDo:string;
  editGet:string;
  editSite:string;
  editImg1:string;
  editImg2:string;
  editImg3:string;

  modalRef: BsModalRef | null;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;

  constructor(private eventServices: AdminEventService,
    private modalService: BsModalService){}

  ngOnInit(): void {
    this.getEvents();
  }
  private getEvents():void{
    this.eventServices.getJSONEvents().subscribe(
      events => {
        this.admEvents = events;
      },
      err => {
        console.log(err);
      }
    )
  }

  addModal(addNew: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addNew);
  }

  getLastId() {
    return this.admEvents.length > 0 ? this.admEvents.slice(-1)[0].id + 1 : 1;
  }

  addNewEvent():void{
    let id = this.editStatus ? this.eventID : this.getLastId();
    if(this.editEvent) {
      this.eventServices.updateJSONWEvents(this.editEvent).subscribe(
        () =>{
          this.getEvents();
        }
      );
    } else{
      const newEvent:AdmEvent = new Events(
        id,
        this.newName,
        this.newDate,
        this.newType,
        this.newVideo,
        this.newLocation,
        this.newLocationLat,
        this.newLocationLng,
        this.newSlogan,
        this.newDescrip,
        this.newImg,
        this.newWear,
        this.newPack,
        this.newTicket,
        this.newToDo,
        this.newGet,
        this.newSite,
        this.newImg1,
        this.newImg2,
        this.newImg3,        
      );
      this.eventServices.addJSONEvents(newEvent).subscribe(
        () =>{
          this.getEvents();
        }
      )
    }
    this.resetForm();
  }

  resetForm():void{
    this.newName = '';
    this.newDate = '';
    this.newType = null;
    this.newVideo = '';
    this.newLocation = '';
    this.newLocationLat = null;
    this.newLocationLng = null;
    this.newSlogan = '';
    this.newDescrip = '';
    this.newWear = '';
    this.newImg = '';
    this.newPack = '';
    this.newTicket = '';
    this.newToDo = '';
    this.newGet = '';
    this.newSite = '';
    this.newImg1 = '';
    this.newImg2 = '';
    this.newImg3 = '';
  }
     
  showMore(info: TemplateRef<any>) {
    this.modalRef = this.modalService.show(info, { class: 'modal-lg' });
  }

  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
    this.modalRef.hide();
    this.modalRef = null;
  }

  deleteEvent():void{
    this.eventServices.deleteJSONEvents(this.removeEvent.id).subscribe(
      () =>{
        this.getEvents();
      }
    );
    this.removeEvent = null;
    this.modalRef3.hide();
  }
  markDeleteModal(del: TemplateRef<any>, event:AdmEvent):void{
    this.modalRef3 = this.modalService.show(del, { class: 'second' });
    this.removeEvent = event;
  }

  editModal(edit: TemplateRef<any>, event:AdmEvent):void{
    this.modalRef2 = this.modalService.show(edit, { class: 'second' });
    this.editEvent = event;
  }
}
