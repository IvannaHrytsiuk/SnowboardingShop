import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
count:number = 0;
display:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', ['$event'])

onWindowScroll() {
    if (window.pageYOffset > 0){
      document.getElementById('header').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    } else {
      document.getElementById('header').style.backgroundColor = 'rgba(0, 0, 0, 1)';
    }
  }
  search():void{
      document.getElementById('search').style.display = 'block';
      document.getElementById('search').classList.add('bounce-in-right');
      document.getElementById('searchIconsBlock').style.display = 'none';
    }
  closeSearch(){
    document.getElementById('search').style.display = 'none';
    document.getElementById('searchIconsBlock').style.display = 'flex';
  }
   myFunction() {
    var x = document.getElementById("header");
    if (x.className === "header") {
      x.className += " responsive";
    } else {
      x.className = "header";
    }
  }
  myFunc2(){
    var x = document.getElementById("header");
    x.className = "header";
  }
}
