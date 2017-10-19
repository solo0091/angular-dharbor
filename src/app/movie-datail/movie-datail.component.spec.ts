import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDatailComponent } from './movie-datail.component';

describe('MovieDatailComponent', () => {
  let component: MovieDatailComponent;
  let fixture: ComponentFixture<MovieDatailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDatailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
