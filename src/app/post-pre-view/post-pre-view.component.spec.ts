import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPreViewComponent } from './post-pre-view.component';

describe('PostPreViewComponent', () => {
  let component: PostPreViewComponent;
  let fixture: ComponentFixture<PostPreViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostPreViewComponent]
    });
    fixture = TestBed.createComponent(PostPreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
