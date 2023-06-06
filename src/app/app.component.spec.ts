import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, NavComponent],
      providers : []
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have router outlet', ()=>{
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull()
  })

});
