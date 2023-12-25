import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutDashboardComponent } from './site-layout-dashboard.component';

describe('SiteLayoutDashboardComponent', () => {
  let component: SiteLayoutDashboardComponent;
  let fixture: ComponentFixture<SiteLayoutDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SiteLayoutDashboardComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
