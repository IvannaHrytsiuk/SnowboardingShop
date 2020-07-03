import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  email:string;
  password:string;
  condition:boolean;

  constructor( public router: Router ) { }

  ngOnInit(): void {
  }
  check():void{
    if(this.email == "admin@gmail.com" && this.password == "admin123"){
      this.router.navigate(['/admin']);
    }
  }
}
