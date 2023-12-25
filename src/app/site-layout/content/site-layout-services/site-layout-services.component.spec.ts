import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutServicesComponent } from './site-layout-services.component';

describe('SiteLayoutServicesComponent', () => {
  let component: SiteLayoutServicesComponent;
  let fixture: ComponentFixture<SiteLayoutServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SiteLayoutServicesComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
