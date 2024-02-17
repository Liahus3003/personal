import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutAppreciationComponent } from './site-layout-appreciation.component';

describe('SiteLayoutAppreciationComponent', () => {
  let component: SiteLayoutAppreciationComponent;
  let fixture: ComponentFixture<SiteLayoutAppreciationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SiteLayoutAppreciationComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutAppreciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
