import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let voteComponent : VoteComponent;

  beforeEach(()=>{
    voteComponent = new VoteComponent();
  })

  it('should increment value when upvote', () => {
    voteComponent.upVote();
    expect(voteComponent.totalVotes).toBe(1);
  });

  it('should decrement value when downvote', () => {
    voteComponent.downVote();
    expect(voteComponent.totalVotes).toBe(-1);
  });
});