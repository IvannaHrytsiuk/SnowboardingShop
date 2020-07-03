import { Component, OnInit } from '@angular/core';
import { AdmTeam } from 'src/app/shared/interfaces/team-admin.interface';
import { TeamAdminService } from 'src/app/shared/services/team-admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams:Array<AdmTeam> = [];
  constructor( private teamService: TeamAdminService,
    private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.getTeam();
  }
  private getTeam():void{
    this.teamService.getJSONAllTeam().subscribe(
      data => {
        this.teams = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
