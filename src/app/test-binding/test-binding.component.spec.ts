import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBindingComponent } from './test-binding.component';

describe('TestBindingComponent', () => {
  let component: TestBindingComponent;
  let fixture: ComponentFixture<TestBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
