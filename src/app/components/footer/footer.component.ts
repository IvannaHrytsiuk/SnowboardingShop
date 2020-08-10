import { Component, OnInit } from '@angular/core';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
statusClass = '';
  constructor( private categoriesService:CategoryAdminService) { }
 category:Array<AdmCategory>;
  ngOnInit(): void {
    this.getAdminCategory();
  }
  setActiveClass(){
    this.statusClass = 'isActive';
  }
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
}
