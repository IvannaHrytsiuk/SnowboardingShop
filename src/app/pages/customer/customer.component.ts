import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  form: FormGroup;
  email:string;
  password:string;
  condition:boolean;

  constructor( public router: Router,
    private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      emailV: [null, [Validators.required, Validators.email, Validators.pattern("\w{2,12}\@\w{2,12}\.[a-z]{2,5}")]],
      passwordV: [null, Validators.required]
    })
  }
  check():void{
    if(this.email == "admin@gmail.com" && this.password == "admin123"){
      this.router.navigate(['/admin']);
    }
  }
}
