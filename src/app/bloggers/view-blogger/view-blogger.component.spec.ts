import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloggerComponent } from './view-blogger.component';

describe('ViewBloggerComponent', () => {
  let component: ViewBloggerComponent;
  let fixture: ComponentFixture<ViewBloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
