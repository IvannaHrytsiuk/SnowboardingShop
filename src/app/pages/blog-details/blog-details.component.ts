import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdmEvent } from 'src/app/shared/interfaces/admin-event.interface';
import { AdminBlogService } from 'src/app/shared/services/admin-blog.service';
import { AdmBlog } from 'src/app/shared/interfaces/admin-blog.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
view:AdmBlog;
url:any;
  constructor(private route: ActivatedRoute,
    private blogService:AdminBlogService,
    private _sanitizer: DomSanitizer
    ) { }

  ngOnInit(): void {
    this.getPublication();
  }
  getPublication():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogService.getJSONOnePublication(id).subscribe(
      data =>{
        this.view = data;
        this.url = this._sanitizer.bypassSecurityTrustResourceUrl(this.view.videoLink);
      }
    )
  }
}
