import { async, ComponentFixture, TestBed } from '@angular/core/testing';
<<<<<<< HEAD
import { MovieListComponent } from './movie-list.component';


=======

import { MovieListComponent } from './movie-list.component';
>>>>>>> 7469e34d9d32ba7ffb1298eaed90cf8821ca67cf

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
