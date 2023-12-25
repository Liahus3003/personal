import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCSSComponent } from './learning-css.component';

describe('LearningCSSComponent', () => {
  let component: LearningCSSComponent;
  let fixture: ComponentFixture<LearningCSSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [LearningCSSComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningCSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
