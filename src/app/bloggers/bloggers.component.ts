import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateBloggerComponent } from './create-blogger/create-blogger.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BloggerService } from './blogger.service';
import { Blogger } from './blogger';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.scss'],
})
export class BloggersComponent implements OnInit {
  bloggers$: Observable<Blogger[]>;
  blogger?: Blogger;
  searchFM: FormGroup;


  constructor(
    private modalService: NgbModal,
    private bloggerService: BloggerService,
    private readonly formBuilder: FormBuilder
  ) {
    this.modalService.activeInstances.subscribe((list) => {});
    this.bloggers$ = this.bloggerService.getAll();
  }

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.searchFM = this.formBuilder.group({
      searchText: [null],
    });
    
    this.searchFM.get('searchText')?.valueChanges.subscribe(async (result)=> {
      this.blogger = undefined;
      this.bloggers$ = this.bloggerService.searchData(result);
    });
  }

  createBlogger() {
    this.modalService.open(CreateBloggerComponent).result.then(
      (result: Blogger) => {
        this.bloggerService.create(result);
      },
      (reason) => {
        console.log(reason);
      }
    );
  }

  updateBlogger() {
    
  }

  deleteBlogger() {
    this.bloggerService.delete(this.blogger!.idf);
    this.blogger = undefined;
  }

  closeBlogger() {
    this.blogger = undefined;
  }

  selectBlogger(blogger: Blogger) {
    this.blogger = blogger;
  }
}
