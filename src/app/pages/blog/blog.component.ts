import { Component, OnInit } from '@angular/core';
import { AdminBlogService } from 'src/app/shared/services/admin-blog.service';
import { AdmBlog } from 'src/app/shared/interfaces/admin-blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
publications:Array<AdmBlog> = [];
  constructor( private blogService:AdminBlogService) { }

  ngOnInit(): void {
    this.getPublications()
  }
  private getPublications():void{
    this.blogService.getJSONPublication().subscribe(
      data => {
        this.publications = data;
      },
      err => {
        console.log(err);
      }
    )
  }
}
