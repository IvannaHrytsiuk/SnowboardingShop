<<<<<<< HEAD
import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> 33a0a0c... first commit

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  category:Array<AdmCategory>;
  constructor( private categoriesService:CategoryAdminService) { }

  ngOnInit(): void {
    this.getAdminCategory();
  }
  private getAdminCategory():void{
    this.categoriesService.getJSONAllCategories().subscribe(
      dataCategories => {
        this.category = dataCategories;
        console.log(this.category)
      },
      errCategories => {
        console.log(errCategories);
      }
    )
  }
=======
  
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 33a0a0c... first commit
}
