import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMySqlComponent } from './learning-my-sql.component';

describe('LearningMySqlComponent', () => {
  let component: LearningMySqlComponent;
  let fixture: ComponentFixture<LearningMySqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningMySqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningMySqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
