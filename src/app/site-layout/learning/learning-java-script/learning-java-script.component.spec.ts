import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningJavaScriptComponent } from './learning-java-script.component';

describe('LearningJavaScriptComponent', () => {
  let component: LearningJavaScriptComponent;
  let fixture: ComponentFixture<LearningJavaScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningJavaScriptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningJavaScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
