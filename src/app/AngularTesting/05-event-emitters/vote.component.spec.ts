import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise a event when upvoted', () => {
    let totalVote:any;
    //subscribed
    component.voteChanged.subscribe(totalV => totalVote = totalV);

    //triggered
    component.upVote();

    //examined/ Assert
    expect(totalVote).toBe(1);
  });
});