import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdminProductService } from 'src/app/shared/services/admin-product.service';
import { AdmProduct } from 'src/app/shared/interfaces/admin-product.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';
import { Product } from 'src/app/shared/classes/admin-product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  modalRef: BsModalRef;
  productAdmin:Array<AdmProduct> = [];
  categoryAdmin:Array<AdmCategory> = [];
  categ:any;
  categ2:any;
  productName:string;
  productCategory:string;
  productType:string;
  productDescription:string;
  productSize:string;
  productWidth:string;
  productLaminates:string;
  productLevel:string;
  productPrice:number;
  productImage:string;

  addProductName:string;
  addProductType:string;
  addProductDescription:string;
  addProductSize:string;
  addProductWidth:string;
  addProductLaminates:string;
  addProductLevel:string;
  addProductPrice:number;
  addProductImageUrl:string;
  selectedOption:number;

  editStatus:boolean = false;
  productID:number;

  editSelectedOption:number;
  editProductName:string;
  editProductType:string;
  editProductDescription:string;
  editProductSize:string;
  editProductWidth:string;
  editProductLaminates:string;
  editProductLevel:string;
  editProductImageUrl:string;
  editProductPrice:number;

  removeProduct: AdmProduct;

  constructor( private adminProductsService: AdminProductService,
    private modalService: BsModalService,
    private adminCateroryService: CategoryAdminService
  ){}

  ngOnInit(): void {
    this.getAdminProducts();
    this.getAdminCategory();
  }

  private getAdminProducts():void{
    this.adminProductsService.getJSONProducts(true).subscribe(
      data =>{
        this.productAdmin = data;
        console.log(this.productAdmin)
      },
      err => {
        console.log(err)
      }
    )
  }
  private getAdminCategory():void{
    this.adminCateroryService.getJSONAllCategories().subscribe(
      dataCategory => {
        this.categoryAdmin = dataCategory;
      },
      errCategories => {
        console.log(errCategories);
      }
    );
  }

  openModal(showMore: TemplateRef<any>, product:AdmProduct) {
    this.categ = product;
    this.productCategory = this.categ.categories.categoriesName;
    this.modalRef = this.modalService.show(showMore);
    this.productName = product.productName;
    this.productImage = product.image;
    this.productType = product.type;
    this.productLevel = product.level;
    this.productPrice = product.price;
    this.productDescription = product.description;
    this.productSize = product.size;
    this.productWidth = product.width;
    this.productLaminates = product.laminates;
  }

  addOpenModal(addNewProd: TemplateRef<any>){
    this.modalRef = this.modalService.show(addNewProd);
  }

  addProduct() : void{
    const newProduct:AdmProduct = new Product(
      1,
      this.selectedOption,
      this.addProductName,
      this.addProductType,
      this.addProductDescription,
      this.addProductSize,
      this.addProductWidth,
      this.addProductLaminates,
      this.addProductLevel,
      this.addProductPrice,
      this.addProductImageUrl
    );
    if(this.productAdmin.length){
      const id = this.productAdmin.slice(-1)[0].id +1;
      newProduct.id = id;
    }
    if(this.editStatus){
      newProduct.id = this.productID;
      newProduct.categoriesId = this.editSelectedOption;
      newProduct.productName = this.editProductName;
      newProduct.type = this.editProductType;
      newProduct.description = this.editProductDescription;
      newProduct.size = this.editProductSize;
      newProduct.width = this.editProductWidth;
      newProduct.laminates = this.editProductLaminates;
      newProduct.level = this.editProductLevel;
      newProduct.price = this.editProductPrice;
      newProduct.image = this.editProductImageUrl;
      this.adminProductsService.updateJSONProducts(newProduct).subscribe(
        () => {
          this.getAdminProducts();
        }
      )
    }else{
      this.adminProductsService.addJSONProducts(newProduct).subscribe(
        () => {
          this.getAdminProducts();
        }
      )
    }
    this.resetForm();
    this.modalRef.hide();
    this.editStatus = false;
  }
  doDeleteProduct():void{
    this.adminProductsService.deleteJSONProducts(this.removeProduct.id).subscribe(
      () =>{
        this.getAdminProducts();
      }
    );
    this.removeProduct = null;
    this.modalRef.hide()
  }
  markDeleteProductModal(deleteM: TemplateRef<any>, product:AdmProduct):void{
    this.modalRef = this.modalService.show(deleteM);
    this.removeProduct = product;
  }
  editOpenModal(edit: TemplateRef<any>, product:AdmProduct) {
    this.modalRef = this.modalService.show(edit);
    this.editSelectedOption = product.categoriesId;
    this.editProductName = product.productName;
    this.editProductType = product.type;
    this.editProductDescription = product.description;
    this.editProductSize = product.size;
    this.editProductWidth = product.width;
    this.editProductLaminates = product.laminates;
    this.editProductLevel = product.level;
    this.editProductPrice = product.price;
    this.editProductImageUrl = product.image;
    this.productID = product.id;
    this.editStatus = true;
  }
  resetForm():void{
    this.addProductName = "";
    this.addProductType = "";
    this.addProductDescription = "";
    this.addProductSize = "";
    this.addProductWidth = "";
    this.addProductLaminates = "";
    this.addProductLevel = "";
    this.addProductPrice = null;
    this.addProductImageUrl = "";
    this.selectedOption = null;
  }
}
