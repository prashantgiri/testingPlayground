import { Component } from '@angular/core';

@Component({
  selector: 'app-greeter',
  templateUrl: './greeter.component.html',
  styleUrls: ['./greeter.component.scss']
})
export class GreeterComponent {
  totalVotes = 0;

  upVote(){
    this.totalVotes++;
  }
}
