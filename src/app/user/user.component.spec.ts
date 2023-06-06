import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';

//Stubs fake classes
export class RouterStub{
  navigate(){
  }
}

export class ActivatedRouteStub{
  subject = new Subject();
  //params: Observable<any> = of({});

  push(id:any){
    this.subject.next(id)
  }

  get params(){
    return this.subject.asObservable()
  }
}

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers : [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    });
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to greeter when gotoGreeter method get called', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.gotoGreeter();
    
    expect(spy).toHaveBeenCalledOnceWith(['greeter']);
  });

  it('should navigate to empty route when subscribed to route param get called', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    let route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({id:0});

    expect(spy).toHaveBeenCalledOnceWith(['']);
  });

});
