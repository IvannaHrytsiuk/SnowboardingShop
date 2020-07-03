import { Component, OnInit } from '@angular/core';
import { RegUser } from 'src/app/shared/interfaces/register-user.interface';
import { RegisterUserService } from 'src/app/shared/services/register-user.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {
  users:Array<RegUser> = [];

  constructor( private regUsersService: RegisterUserService) { }

  ngOnInit(): void {
    this.getRegisterUsers();
  }
  
  private getRegisterUsers():void{
    this.regUsersService.getJSONUsers().subscribe(
      data =>{
        this.users = data;
      },
      err => {
        console.log(err)
      }
    )
  }
}
