import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningReactComponent } from './learning-react.component';

describe('LearningReactComponent', () => {
  let component: LearningReactComponent;
  let fixture: ComponentFixture<LearningReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [LearningReactComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
