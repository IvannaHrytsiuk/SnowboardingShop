import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdmCategory } from 'src/app/shared/interfaces/category-admin.interface';
import { CategoryAdminService } from 'src/app/shared/services/category-admin.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/shared/classes/category-admin.model';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.scss']
})
export class CategoryAdminComponent implements OnInit {
  modalRef: BsModalRef;
  adminCategory:Array<AdmCategory>  = [];
  categoryName:string = '';
  categoryID:number = null;
  editStatus:boolean = false;
  removeCategory:AdmCategory;
  editCategoryName:string;
  editCategoryID:number;
  id:number;

  constructor(private adminCategoryServices: CategoryAdminService,
    private modalService: BsModalService){}

  ngOnInit(): void {
    this.getAdminCategory();
  }

  private getAdminCategory():void{
    this.adminCategoryServices.getJSONAllCategories().subscribe(
      dataCategory => {
        this.adminCategory = dataCategory;
      },
      errCategory => {
        console.log(errCategory);
      }
    )
  }

  addCategoryModal(addCategory: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addCategory);
  }
  
  addNewCategory():void{
    const newCategory:AdmCategory = new Category(
      1,
      this.categoryName,
    );
    if(this.adminCategory.length>0){
      const id = this.adminCategory.slice(-1)[0].id + 1;
      newCategory.id = id;
      console.log(newCategory)
    }
    if(this.editStatus){
      newCategory.id = this.categoryID;
      newCategory.categoriesName = this.editCategoryName;
      this.adminCategoryServices.updateJSONCategory(newCategory).subscribe(
        () =>{
          this.getAdminCategory();
        }
      )
      this.modalRef.hide()
    } else{
      this.adminCategoryServices.addJSONCategory(newCategory).subscribe(
        () =>{
          this.getAdminCategory();
        }
      )
    }
    this.categoryName = '';
    this.editStatus = false;
  }
  deleteCategory():void{
    this.adminCategoryServices.deleteJSONCategory(this.removeCategory.id).subscribe(
      () =>{
        this.getAdminCategory();
      }
    );
    this.removeCategory = null;
    this.modalRef.hide();
  }
  markDeleteCategoryModal(deleteM: TemplateRef<any>, category:AdmCategory):void{
    this.modalRef = this.modalService.show(deleteM);
    this.removeCategory = category;
  }

  editCategoryModal(edit: TemplateRef<any>, category:AdmCategory):void{
    this.modalRef = this.modalService.show(edit);
    this.categoryID = category.id;
    this.editCategoryName = category.categoriesName;
    this.editStatus = true;
    console.log(category)
  }
}
