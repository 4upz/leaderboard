import { shallow } from 'enzyme'
import Leaderboard from './Leaderboard'
import Filter from './Filter'
import TopThree from './TopThree'
import LeaderboardList from './LeaderBoardList'

describe('Leaderboard View', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Leaderboard />)
  })

  it('renders filters for the list', () => {
    expect(wrapper.find(Filter).length).toBe(1)
  })

  it('renders a view for the top 3 in the list', () => {
    expect(wrapper.find(TopThree).length).toBe(1)
  })

  it('renders the Leaderboard list for the non-top 3 users', () => {
    expect(wrapper.find(LeaderboardList).length).toBe(1)
  })
})
