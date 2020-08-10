import { Component, OnInit, HostListener } from '@angular/core';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
}
