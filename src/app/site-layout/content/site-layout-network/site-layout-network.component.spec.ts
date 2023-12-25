import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutNetworkComponent } from './site-layout-network.component';

describe('SiteLayoutNetworkComponent', () => {
  let component: SiteLayoutNetworkComponent;
  let fixture: ComponentFixture<SiteLayoutNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [SiteLayoutNetworkComponent]
})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
