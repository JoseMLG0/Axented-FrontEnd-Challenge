import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blogger } from '../blogger';
import {
  BehaviorSubject,
  Observable,
  Subject,
  filter,
  firstValueFrom,
  map,
  share,
  startWith,
  switchMap,
} from 'rxjs';
import { BloggerService } from '../blogger.service';

@Component({
  selector: 'app-view-blogger',
  templateUrl: './view-blogger.component.html',
  styleUrls: ['./view-blogger.component.scss'],
})
export class ViewBloggerComponent {
  noFriendsBlogger$: Observable<Blogger[]>;
  friendsBlogger$: Observable<Blogger[]>;
  _blogger: Blogger;
  selectedNoFriend?: string;
  @Input() set blogger(value: string) {
    this.getBloggerData(value);
  }
  // @Output() updateBlogger = new EventEmitter<void>();
  @Output() deleteBlogger = new EventEmitter<void>();
  @Output() closeBlogger = new EventEmitter<void>();
  @Output() changeBloggerSelected = new EventEmitter<Blogger>();

  constructor(private bloggerService: BloggerService) {}

  ngOnInit(): void {}

  async getBloggerData(bloggerID: string) {
    const blogger = await firstValueFrom(this.bloggerService.get(bloggerID));
    this._blogger = blogger;
    this.initDataFriends();
  }

  selectFriend(friend: Blogger){
    this.changeBloggerSelected.emit(friend);
    this.getBloggerData(friend.idf??'');
  }

  initDataFriends() {
    this.friendsBlogger$ = this.bloggerService.getFriends(
      this._blogger.friends
    );
    this.noFriendsBlogger$ = this.bloggerService.getNotFriends(
      this._blogger.friends,
      this._blogger.id
    );
  }

  selectNoFriend($event: any) {
    this.selectedNoFriend = $event.target.value;
  }

  addFriend() {
    this.bloggerService.addNewFriend(
      this._blogger.idf ?? '',
      this.selectedNoFriend ?? ''
    );
    this.selectedNoFriend = undefined;
    this.getBloggerData(this._blogger.idf??'');
  }

  update() {
    // this.updateBlogger.emit();
  }

  deleteBloggerF() {
    this.deleteBlogger.emit();
  }

  closeBloggerF() {
    this.closeBlogger.emit();
  }
}
