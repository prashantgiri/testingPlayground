import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent]
    });
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should have routing link for user', ()=>{
    let de = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));
    //<a href="/user">
    let index = de.findIndex(de => de.attributes['href'] === "/user");
    
    expect(index).toBeGreaterThan(-1);
  })
});
