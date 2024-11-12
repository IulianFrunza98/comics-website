import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsByCategoryComponent } from './comics-by-category.component';

describe('ComicsByCategoryComponent', () => {
  let component: ComicsByCategoryComponent;
  let fixture: ComponentFixture<ComicsByCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComicsByCategoryComponent]
    });
    fixture = TestBed.createComponent(ComicsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
