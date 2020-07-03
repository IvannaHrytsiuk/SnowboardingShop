import { Component, OnInit } from '@angular/core';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { AdmProduct } from 'src/app/shared/interfaces/admin-product.interface';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  chebox:string;
  chebox2:string;
  chebox3:string;
  category:Array<AdmCategory> = [];
  products:Array<AdmProduct> = [];
  constructor(private categoriesService: CategoryAdminService,
    private productsService:AdminProductService,
    private route:ActivatedRoute,
    private router: Router) {
      this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
      this.getProducts();
    }
  });
}
  ngOnInit(): void {
    this.getAdminCategory();
    this.getProducts();
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
  private getProducts():void{
    let category = +this.route.snapshot.paramMap.get('category');
    this.productsService.getJSONProducts(true).subscribe(
      data =>{
        if(category){
          data = data.filter(p => p.categoriesId == category);
        }
        this.products = data;
      },
      err => {
        console.log(err)
      }
    )
  }
}
