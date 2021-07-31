import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningBaseComponent } from './learning-base.component';

describe('LearningBaseComponent', () => {
  let component: LearningBaseComponent;
  let fixture: ComponentFixture<LearningBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
