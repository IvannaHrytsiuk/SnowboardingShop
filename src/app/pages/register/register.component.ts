import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from 'src/app/shared/services/register-user.service';
import { RegUser } from 'src/app/shared/interfaces/register-user.interface';
import { User } from 'src/app/shared/classes/register-user.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  oneUser:RegUser;
  users:Array<RegUser> = [];
  usersEmail:any = [];
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  includ:boolean;
  isHidden:boolean = true;

  constructor( private regUsersService: RegisterUserService, 
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser()
  }

  addNewUser():void{  
    this.regUsersService.getJSONUsers().subscribe(
      user => {
        for(let i=0; i<user.length; i++){
          this.usersEmail.push(user[i].email);
        }
        this.includ = this.usersEmail.includes(this.email);
       if(this.includ==true){
         console.log('incl');
         this.isHidden=false;
         this.resetForm();
       } else{
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
          this.getOne();
      },
      err => {
        console.log(err);
      }
    )
  }
  getOne(){
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
      this.regUsersService.getJSONOneUser(id).subscribe(
        data =>{
          this.oneUser = data;
        }
      )
      console.log(this.oneUser)
    this.router.navigate(['/user/id'+ this.oneUser.id, this.oneUser.id]);
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
