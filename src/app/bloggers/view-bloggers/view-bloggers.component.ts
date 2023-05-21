import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Blogger } from '../blogger';
import { BloggerService } from '../blogger.service';

@Component({
  selector: 'app-view-bloggers',
  templateUrl: './view-bloggers.component.html',
  styleUrls: ['./view-bloggers.component.scss'],
})
export class ViewBloggersComponent implements OnInit {
  @Input() bloggers$: Observable<Blogger[]>;
  @Output() bloggersEmitter = new EventEmitter<Blogger>();

  constructor(private readonly bloggerService: BloggerService) {}

  ngOnInit(): void {
    this.bloggers$ = this.bloggerService.getAll();
  }

  selectBlogger(blogger: Blogger) {
    this.bloggersEmitter.emit(blogger);
  }
}
