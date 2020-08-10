import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';
=======
>>>>>>> 33a0a0c... first commit

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
statusClass = '';
<<<<<<< HEAD
  constructor( private categoriesService:CategoryAdminService) { }
 category:Array<AdmCategory>;
  ngOnInit(): void {
    this.getAdminCategory();
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 33a0a0c... first commit
  }
  setActiveClass(){
    this.statusClass = 'isActive';
  }
<<<<<<< HEAD
  private getAdminCategory():void{
    this.categoriesService.getJSONAllCategories().subscribe(
      dataCategories => {
        this.category = dataCategories;
      },
      errCategories => {
        console.log(errCategories);
      }
    )
  }
=======
>>>>>>> 33a0a0c... first commit
}
