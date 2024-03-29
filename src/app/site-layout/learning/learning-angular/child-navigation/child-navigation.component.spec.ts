import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNavigationComponent } from './child-navigation.component';

describe('ChildNavigationComponent', () => {
  let component: ChildNavigationComponent;
  let fixture: ComponentFixture<ChildNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ChildNavigationComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
