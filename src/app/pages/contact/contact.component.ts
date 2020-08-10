import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('mapElem') mapElement: any;
  mapElem: google.maps.Map;
  isCollapsed = false;
  isCollapsed1 = false;
  isCollapsed2= false;
  isCollapsed3 = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.maps();
  }
  maps(): void {
    const mapProperties = {
         center: new google.maps.LatLng(49.8396924, 24.0270957),
         zoom: 15,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.mapElem = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
 }
}
