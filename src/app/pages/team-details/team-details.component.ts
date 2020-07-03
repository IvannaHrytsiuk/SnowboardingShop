import { Component, OnInit } from '@angular/core';
import { AdmTeam } from 'src/app/shared/interfaces/team-admin.interface';
import { TeamAdminService } from 'src/app/shared/services/team-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  viewMember:AdmTeam;
  
  constructor(private teamService: TeamAdminService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTeam();
  }
  getTeam():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.teamService.getJSONMember(id).subscribe(
      data =>{
        this.viewMember = data;
      }
    )
  }
}
