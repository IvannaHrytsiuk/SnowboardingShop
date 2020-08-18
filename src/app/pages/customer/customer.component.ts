import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { RegisterUserService } from 'src/app/shared/services/register-user.service';
import { RegUser } from 'src/app/shared/interfaces/register-user.interface';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  email:string;
  password:string;

  users:Array<RegUser> = [];
  usersFromEmail:any;
  usersPassword:any = [];
  includ:boolean;

  isHidden:boolean = true;
  isHidden2:boolean = true;
  emptyHid:boolean = true;

  registerForm: FormGroup;
  submitted:boolean = false;

  // emailPattern = "\w{2,12}\@\w{2,12}\.[a-z]{2,5}";
  constructor( public router: Router,
    private formBuilder:FormBuilder,
    private regUsersService:RegisterUserService) {}

  ngOnInit(): void {
      this.registerForm = this.formBuilder.group({
        emailUser: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        passwordUser: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    this.check();
}

  check():void{
    this.regUsersService.getJSONUserFromEmail(this.email).subscribe(
      user =>{
        this.usersFromEmail = user;
        console.log(this.usersFromEmail);
        if(this.usersFromEmail[0] === undefined){
          this.isHidden = false;
          this.isHidden2 = true;
        } else if(this.password != this.usersFromEmail[0].password){
          this.isHidden2 = false;
          this.isHidden = true;
        } else if(this.usersFromEmail[0].email == 'admin@gmail.com' && this.password == 'admin123'){
          this.router.navigate(['/admin']);
        } else{
          this.router.navigate(['/user/id', this.usersFromEmail[0].id]);
        }
      }
    )
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }
}
