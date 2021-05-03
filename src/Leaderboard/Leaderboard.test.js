import { shallow } from 'enzyme'
import Leaderboard from './Leaderboard'
import Filter from './Filter'
import TopThreeList from './TopThreeList'
import LeaderboardList from './LeaderBoardList'
import mockUsers from '../mocks/users'
import leaderboardHelpers from '../utils/leaderboardHelper'

describe('Leaderboard View', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Leaderboard />)
  })

  it('renders filters for the list', () => {
    expect(wrapper.find(Filter).length).toBe(1)
  })

  it('renders a view for the top 3 in the list', () => {
    expect(wrapper.find(TopThreeList).length).toBe(1)
  })

  it('renders the Leaderboard list for the non-top 3 users', () => {
    expect(wrapper.find(LeaderboardList).length).toBe(1)
  })

  it('sends the top three users as props to the Top Three List', () => {
    const topThreeComponent = wrapper.find(TopThreeList)
    const sortedUsers = leaderboardHelpers.sortByScore(mockUsers)
    const expectedProps = leaderboardHelpers.firstThreeOf(sortedUsers)
    expect(topThreeComponent.props().users).toEqual(expectedProps)
  })

  it('sends the rest of the users who are not top three to the Leaderboard List', () => {
    const leaderboardList = wrapper.find(LeaderboardList)
    const sortedUsers = leaderboardHelpers.sortByScore(mockUsers)
    const expectedProps = leaderboardHelpers.afterFirstThreeOf(sortedUsers)
    expect(leaderboardList.props().users).toEqual(expectedProps)
  })
})
