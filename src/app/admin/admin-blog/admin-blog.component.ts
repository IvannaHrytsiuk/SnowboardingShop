import { Component, OnInit, TemplateRef } from '@angular/core';
import { AdmBlog } from 'src/app/shared/interfaces/admin-blog.interface';
import { AdminBlogService } from 'src/app/shared/services/admin-blog.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DomSanitizer } from '@angular/platform-browser';
import { Blogs } from 'src/app/shared/classes/admin-blog.model';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss']
})
export class AdminBlogComponent implements OnInit {
  adminBlog:Array<AdmBlog> = [];
  modalRef: BsModalRef;
  modalRef2: BsModalRef;
  modalRef3: BsModalRef;
  url:any;
  newTitle:string;
  newVideo:string;
  newPreview:string;
  newImg:string;
  newText:string;
  selectedWeight:number;
  selectedFamily:string;
  selectedSize:string;
  editStatus:boolean = false;
  publicID:number;
  editTitle:string;
  editImg:string;
  editVideo:string;
  editPreview:string;
  editText:string;
  editWeight:number;
  editFamily:string;
  editSize:string;
  view:AdmBlog;
  removePublic:AdmBlog;
 

  constructor(private blogService: AdminBlogService,
    private modalService: BsModalService,
    private _sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.getPublication();
  }
  addNewPublication() : void{
    const newPublic:AdmBlog = new Blogs(
      1,
      this.newTitle,
      this.newImg,
      this.newVideo,
      this.newPreview,
      this.newText,
      this.selectedWeight,
      this.selectedFamily,
      this.selectedSize
    );
    if(this.adminBlog.length){
      const id = this.adminBlog.slice(-1)[0].id +1;
      newPublic.id = id;
    }
    if(this.editStatus){
      newPublic.id = this.publicID;
      newPublic.title = this.editTitle;
      newPublic.image = this.editImg;
      newPublic.videoLink = this.editVideo;
      newPublic.textPriview = this.editPreview;
      newPublic.text = this.editText;
      newPublic.fontWeight = this.editWeight;
      newPublic.fontFamily = this.editFamily;
      newPublic.fontSize = this.editSize;
      this.blogService.updateJSONPublication(newPublic).subscribe(
        () => {
          this.getPublication();
        }
      )
    }else{
      this.blogService.addJSONPublication(newPublic).subscribe(
        () => {
          this.getPublication();
        }
      )
    }
    this.resetForm();
    this.editStatus = false;
  }
  deletePublic():void{
    this.blogService.deleteJSONPublication(this.removePublic.id).subscribe(
      () =>{
        this.getPublication();
      }
    );
    this.removePublic = null;
  }
  delModal(del: TemplateRef<any>, publication:AdmBlog):void{
    this.removePublic = publication;
    this.modalRef3 = this.modalService.show(del, { class: 'modal-sm' });
  }

  resetForm():void{
    this.newTitle = "";
    this.newImg = "";
    this.newVideo = "";
    this.newPreview = "";
    this.newText = "";
    this.selectedWeight = null;
    this.selectedFamily = "";
    this.selectedSize = '';
  }

  addModal(addNew: TemplateRef<any>) {
    this.modalRef = this.modalService.show(addNew);
  }

  private getPublication():void{
    this.blogService.getJSONPublication().subscribe(
      blog => {
        this.adminBlog = blog;
      },
      err => {
        console.log(err);
      }
    )
  }

  openModal(information: TemplateRef<any>, id:number) {
    this.modalRef = this.modalService.show(information, { class: 'modal-lg' });
    this.blogService.getJSONOnePublication(id).subscribe(
      data =>{
        this.view = data;
      }
    )
  }
  videoURL(){
    return this._sanitizer.bypassSecurityTrustResourceUrl(this.view?.videoLink);
  }
  editModal(edit: TemplateRef<any>, publication:AdmBlog ) {
    this.modalRef2 = this.modalService.show(edit, { class: 'second' });
    this.editTitle = publication.title;
    this.editImg = publication.image;
    this.editVideo = publication.videoLink;
    this.editPreview = publication.textPriview;
    this.editText = publication.text;
    this.editWeight = publication.fontWeight;
    this.editFamily = publication.fontFamily;
    this.editSize = publication.fontSize;
    this.publicID = publication.id;
    this.editStatus = true;
  }
  closeFirstModal() {
    if (!this.modalRef) {
      return;
    }
 
    this.modalRef.hide();
    this.modalRef = null;
  }
}