import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutMyProfileComponent } from './site-layout-my-profile.component';

describe('SiteLayoutMyProfileComponent', () => {
  let component: SiteLayoutMyProfileComponent;
  let fixture: ComponentFixture<SiteLayoutMyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutMyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutMyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
