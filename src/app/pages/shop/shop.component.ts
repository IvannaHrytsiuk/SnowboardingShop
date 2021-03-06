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
  arrLowPrice:any;
  arrHighPrice:any;
  arrAZ:any;
  arrZA:any;
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
        const lowPrice = []; 
        this.products.forEach(val => lowPrice.push(Object.assign({}, val)));
        lowPrice.sort(this.sortByLowPrice);
        this.arrLowPrice = lowPrice;
        const highPrice = []; 
        this.products.forEach(val => highPrice.push(Object.assign({}, val)));
        highPrice.sort(this.sortByHighPrice);
        this.arrHighPrice = highPrice;
        const nameAZ = []; 
        this.products.forEach(val => nameAZ.push(Object.assign({}, val)));
        nameAZ.sort(this.sortByAZ);
        this.arrAZ = nameAZ;
        const nameZA = []; 
        this.products.forEach(val => nameZA.push(Object.assign({}, val)));
        nameZA.sort(this.sortByZA);
        this.arrZA = nameZA;
      },
      err => {
        console.log(err)
      } 
    )
  }
  sortByLowPrice(a, b){
      if ( a.price < b.price ){
        return -1;
      }
      if ( a.price > b.price ){
        return 1;
      }
      return 0;    
  }
  sortByHighPrice(a, b){
      if ( a.price > b.price ){
        return -1;
      }
      if ( a.price < b.price ){
        return 1;
      }
      return 0;    
  }
  sortByAZ(a, b){
      if ( a.productName < b.productName ){
        return -1;
      }
      if ( a.productName > b.productName ){
        return 1;
      }
      return 0;    
  }
  sortByZA(a, b){
      if ( a.productName > b.productName ){
        return -1;
      }
      if ( a.productName < b.productName ){
        return 1;
      }
      return 0;    
  }
  
  showLowPrice(){
    document.getElementById('standart').style.display = 'none';
    document.getElementById('highPrice').style.display = 'none';
    document.getElementById('nameAZ').style.display = 'none';
    document.getElementById('nameZA').style.display = 'none';
    document.getElementById('lowPrice').style.display = 'flex';
    document.getElementById('activeA1').classList.add('active');
    document.getElementById('activeA2').classList.remove('active');
    document.getElementById('activeA3').classList.remove('active');
    document.getElementById('activeA4').classList.remove('active');

  }
  showHighPrice(){
    document.getElementById('standart').style.display = 'none';
    document.getElementById('lowPrice').style.display = 'none';
    document.getElementById('nameAZ').style.display = 'none';
    document.getElementById('nameZA').style.display = 'none';
    document.getElementById('highPrice').style.display = 'flex';
    document.getElementById('activeA1').classList.remove('active');
    document.getElementById('activeA2').classList.add('active');
    document.getElementById('activeA3').classList.remove('active');
    document.getElementById('activeA4').classList.remove('active');
  }
  showAZ(){
    document.getElementById('standart').style.display = 'none';
    document.getElementById('lowPrice').style.display = 'none';
    document.getElementById('highPrice').style.display = 'none';
    document.getElementById('nameZA').style.display = 'none';
    document.getElementById('nameAZ').style.display = 'flex';
    document.getElementById('activeA1').classList.remove('active');
    document.getElementById('activeA2').classList.remove('active');
    document.getElementById('activeA3').classList.add('active');
    document.getElementById('activeA4').classList.remove('active');
  }
  showZA(){
    document.getElementById('standart').style.display = 'none';
    document.getElementById('lowPrice').style.display = 'none';
    document.getElementById('highPrice').style.display = 'none';
    document.getElementById('nameAZ').style.display = 'none';
    document.getElementById('nameZA').style.display = 'flex';
    document.getElementById('activeA1').classList.remove('active');
    document.getElementById('activeA2').classList.remove('active');
    document.getElementById('activeA3').classList.remove('active');
    document.getElementById('activeA4').classList.add('active');
  }
}
