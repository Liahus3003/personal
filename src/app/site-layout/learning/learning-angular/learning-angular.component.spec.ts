import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningAngularComponent } from './learning-angular.component';

describe('LearningAngularComponent', () => {
  let component: LearningAngularComponent;
  let fixture: ComponentFixture<LearningAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
