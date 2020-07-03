import { Component, OnInit } from '@angular/core';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { ActivatedRoute } from '@angular/router';
import { AdmProduct } from 'src/app/shared/interfaces/admin-product.interface';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  viewProduct:AdmProduct;
  valueOrder:number = 1;
  totalCount:number;
  constructor(private adminProductService: AdminProductService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getMyProduct();
  }

  getMyProduct():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.adminProductService.getJSONOneProduct(id).subscribe(
      data =>{
        this.viewProduct = data;
        this.totalCount = this.viewProduct.price;
      }
    )
  }
  moreOrder():void{
    if(this.valueOrder<10){
      this.valueOrder ++;
      this.totalCount = this.valueOrder*this.viewProduct.price;
    } else{
      this.valueOrder = 9;
      this.totalCount = this.valueOrder*this.viewProduct.price;
    } 
  }
  lessOrder():void{
    if(this.valueOrder>1){
      this.valueOrder --;
      this.totalCount = this.valueOrder*this.viewProduct.price;
    } else{
      this.valueOrder = 1;
      this.totalCount = this.valueOrder*this.viewProduct.price;
    } 
  }
}
