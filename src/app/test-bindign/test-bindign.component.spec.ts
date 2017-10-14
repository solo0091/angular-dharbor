import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBindignComponent } from './test-bindign.component';

describe('TestBindignComponent', () => {
  let component: TestBindignComponent;
  let fixture: ComponentFixture<TestBindignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBindignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBindignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
