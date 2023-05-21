import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateBloggerComponent } from './create-blogger/create-blogger.component';
import { ViewBloggerComponent } from './view-blogger/view-blogger.component';
import { ViewBloggersComponent } from './view-bloggers/view-bloggers.component';
import { BloggersComponent } from './bloggers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BloggerRoutingModule } from './bloggers-routing.module';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [CreateBloggerComponent,
    ViewBloggerComponent,
    ViewBloggersComponent,
    BloggersComponent
  ],
  imports: [
    CommonModule,
    BloggerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule
  ],
  providers:[
  ],
})
export class BloggersModule { }
