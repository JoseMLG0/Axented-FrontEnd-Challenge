import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBloggerComponent } from './create-blogger.component';

describe('CreateBloggerComponent', () => {
  let component: CreateBloggerComponent;
  let fixture: ComponentFixture<CreateBloggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBloggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateBloggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
