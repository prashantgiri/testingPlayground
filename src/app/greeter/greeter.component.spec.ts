import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreeterComponent } from './greeter.component';
import { By } from '@angular/platform-browser';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreeterComponent]
    });
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show total Votes', () => {
    component.totalVotes = 20;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.total-vote'));
    let el: HTMLElement = de.nativeElement;

    expect(el.innerText).toContain('20')

  });

  it('should highlight when total votes is 20',()=>{
    component.totalVotes = 20;
    fixture.detectChanges();

    let de = fixture.debugElement.query(By.css('.get-highlight'));

    expect(de.classes['highlight']).toBeTruthy();
  })

  it('it should upvote value when upvote button clicked',()=>{
    component.totalVotes = 0;
    let button = fixture.debugElement.query(By.css('.upvote-btn'))
    button.triggerEventHandler('click');
    fixture.detectChanges();

    expect(component.totalVotes).toBe(1);

  })
});
