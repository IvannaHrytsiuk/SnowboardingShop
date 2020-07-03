import { Component, OnInit, TemplateRef } from '@angular/core';
import { TeamAdminService } from 'src/app/shared/services/team-admin.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AdmTeam } from 'src/app/shared/interfaces/team-admin.interface';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Team } from 'src/app/shared/classes/team-admin.model';


@Component({
  selector: 'app-admin-team',
  templateUrl: './admin-team.component.html',
  styleUrls: ['./admin-team.component.scss']
})
export class AdminTeamComponent implements OnInit {
  adminTeam:Array<AdmTeam> = [];
  modalRef: BsModalRef;
  newName:string;
  newDescrip:string;
  newFact:string;
  newImg:string;
  editName:string;
  editDescrip:string;
  editFact:string;
  editImg:string;
  editStatus:boolean=false;
  memberID:number;
  removeMember:AdmTeam;
  constructor(private teamService: TeamAdminService,
    private modalService: BsModalService){}

  ngOnInit(): void {
    this.getTeam()
  }

  addModal(addNew: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addNew);
  }

  private getTeam():void{
    this.teamService.getJSONAllTeam().subscribe(
      team => {
        this.adminTeam = team;
      },
      errTeam => {
        console.log(errTeam);
      }
    )
  }

  addNewMember():void{
    const newMember:AdmTeam = new Team(
      1,
      this.newName,
      this.newDescrip,
      this.newFact,
      this.newImg
    );
    if(this.adminTeam.length>0){
      const id = this.adminTeam.slice(-1)[0].id + 1;
      newMember.id = id;
    }
    if(this.editStatus){
      newMember.id = this.memberID;
      newMember.name = this.editName;
      newMember.description = this.editDescrip;
      newMember.fact = this.editFact;
      newMember.image = this.editImg;
      this.teamService.updateJSONTeam(newMember).subscribe(
        () =>{
          this.getTeam();
        }
      )
    } else{
      this.teamService.addJSONTeam(newMember).subscribe(
        () =>{
          this.getTeam();
        }
      )
    }
    this.newName = '';
    this.newDescrip = '';
    this.newFact = '';
    this.newImg = '';
    this.editStatus = false;
    this.modalRef.hide();
  }
  deleteMember():void{
    this.teamService.deleteJSONTeam(this.removeMember.id).subscribe(
      () =>{
        this.getTeam();
      }
    );
    this.removeMember = null;
    this.modalRef.hide();
  }
  markDeleteModal(deleteM: TemplateRef<any>, team:AdmTeam):void{
    this.modalRef = this.modalService.show(deleteM);
    this.removeMember = team;
  }

  editModal(edit: TemplateRef<any>, team:AdmTeam):void{
    this.modalRef = this.modalService.show(edit);
    this.memberID = team.id;
    this.editName = team.name;
    this.editDescrip = team.description;
    this.editFact = team.fact;
    this.editImg = team.image;
    this.editStatus = true;
  }
}
