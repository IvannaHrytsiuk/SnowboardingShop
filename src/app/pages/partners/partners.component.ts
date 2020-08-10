import { Component, OnInit } from '@angular/core';
import { AdmPartners } from 'src/app/shared/interfaces/admin-partners.interface';
import { AdminPartnersService } from 'src/app/shared/services/admin-partners.service';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  partners:Array<AdmPartners>;
  constructor( private partnerservice:AdminPartnersService) { }

  ngOnInit(): void {
    this.getPartners();
  }
  private getPartners():void{
    this.partnerservice.getJSONPartners().subscribe(
      data => {
        this.partners = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
