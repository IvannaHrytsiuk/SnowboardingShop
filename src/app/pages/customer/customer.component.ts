import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

=======
>>>>>>> 33a0a0c... first commit

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
<<<<<<< HEAD

export class CustomerComponent implements OnInit {
  loginForm: FormGroup;
  email:string;
  password:string;
  submitted = false;

  constructor( public router: Router,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailInp: ['', [Validators.required, Validators.email, Validators.pattern("\w{2,12}\@\w{2,12}\.[a-z]{2,5}")]],
      passInp: ['', [Validators.required, Validators.minLength(12)]],
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
   
  }

=======
export class CustomerComponent implements OnInit {

  email:string;
  password:string;
  condition:boolean;

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }
>>>>>>> 33a0a0c... first commit
  check():void{
    if(this.email == "admin@gmail.com" && this.password == "admin123"){
      this.router.navigate(['/admin']);
    }
  }
<<<<<<< HEAD
  
=======
>>>>>>> 33a0a0c... first commit
}
