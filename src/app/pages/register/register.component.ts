import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/register-user.service';
import { RegUser } from 'src/app/shared/interfaces/register-user.interface';
import { User } from 'src/app/shared/classes/register-user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  users:Array<RegUser> = [];
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';

  constructor( private regUsersService: RegisterUserService) { }

  ngOnInit(): void {
    this.getUser()
  }

  addNewUser():void{
    const newUser:RegUser = new User(
      1,
      this.firstName,
      this.lastName,
      this.email,
      this.password
    );
    if(this.users.length>0){
      const id = this.users.slice(-1)[0].id + 1;
      newUser.id = id;
    }
    this.regUsersService.addJSONUser(newUser).subscribe(
      () =>{
        this.getUser();
      }
    )
    this.resetForm();
    
  }
  private getUser():void{
    this.regUsersService.getJSONUsers().subscribe(
      user => {
        this.users = user;
        console.log(this.users)
      },
      err => {
        console.log(err);
      }
    )
  }
  resetForm():void{
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.password = null; 
  }
}
