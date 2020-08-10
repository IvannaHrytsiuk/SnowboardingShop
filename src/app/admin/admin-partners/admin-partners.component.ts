import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdminPartnersService } from 'src/app/shared/services/admin-partners.service';
import { AdmPartners } from 'src/app/shared/interfaces/admin-partners.interface';
import { Partners } from 'src/app/shared/classes/admin-partners.model';

@Component({
  selector: 'app-admin-partners',
  templateUrl: './admin-partners.component.html',
  styleUrls: ['./admin-partners.component.scss']
})
export class AdminPartnersComponent implements OnInit {
  adminPartners:Array<AdmPartners>;
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  editStatus:boolean = false;
  partnerID:number;
  removePartner:AdmPartners;

  newName:string;
  newLink:string;
  newDescrip:string;
  newImage:string;

  editName:string;
  editLink:string;
  editDescrip:string;
  editImage:string;

  constructor(private partnerService: AdminPartnersService,
    private modalService: BsModalService){}

  ngOnInit(): void {
    this.getPartners();
  }
  private getPartners():void{
    this.partnerService.getJSONPartners().subscribe(
      partners => {
        this.adminPartners = partners;
      },
      err => {
        console.log(err);
      }
    )
  }

  addModal(addNew: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addNew);
  }

  addNewPartner():void{
    const newPartner:AdmPartners = new Partners(
      1,
      this.newName,
      this.newLink,
      this.newDescrip,
      this.newImage
    );
    if(this.adminPartners.length>0){
      const id = this.adminPartners.slice(-1)[0].id + 1;
      newPartner.id = id;
    }
    if(this.editStatus){
      newPartner.id = this.partnerID;
      newPartner.name = this.editName;
      newPartner.link = this.editLink;
      newPartner.description = this.editDescrip;
      newPartner.image = this.editImage;
      this.partnerService.updateJSONPartners(newPartner).subscribe(
        () =>{
          this.getPartners();
        }
      )
    } else{
      this.partnerService.addJSONPartners(newPartner).subscribe(
        () =>{
          this.getPartners();
        }
      )
    }
    this.newName = '';
    this.newDescrip = '';
    this.newLink = '';
    this.newImage = '';
    this.editStatus = false;
  } 

  editModal(edit: TemplateRef<any>, partner:AdmPartners):void{
    this.modalRef2 = this.modalService.show(edit);
    this.partnerID = partner.id;
    this.editName = partner.name;
    this.editLink = partner.link;
    this.editDescrip = partner.description;
    this.editImage = partner.image;
    this.editStatus = true;
  }

  markDeleteModal(deleteP: TemplateRef<any>, partner:AdmPartners):void{
    this.modalRef3 = this.modalService.show(deleteP);
    this.removePartner = partner;
  }
  deletePartner():void{
    this.partnerService.deleteJSONPartners(this.removePartner.id).subscribe(
      () =>{
        this.getPartners();
      }
    );
    this.removePartner = null;
    this.modalRef3.hide();
  }
}
