import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBloggersComponent } from './view-bloggers.component';

describe('ViewBloggersComponent', () => {
  let component: ViewBloggersComponent;
  let fixture: ComponentFixture<ViewBloggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBloggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBloggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
