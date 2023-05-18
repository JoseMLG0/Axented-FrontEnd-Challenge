import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBloggerComponent } from './create-blogger/create-blogger.component';
import { ViewBloggerComponent } from './view-blogger/view-blogger.component';
import { ViewBloggersComponent } from './view-bloggers/view-bloggers.component';



@NgModule({
  declarations: [
    CreateBloggerComponent,
    ViewBloggerComponent,
    ViewBloggersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BloggersModule { }
