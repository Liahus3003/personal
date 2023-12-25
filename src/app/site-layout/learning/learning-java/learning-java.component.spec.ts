import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningJavaComponent } from './learning-java.component';

describe('LearningJavaComponent', () => {
  let component: LearningJavaComponent;
  let fixture: ComponentFixture<LearningJavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [LearningJavaComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
