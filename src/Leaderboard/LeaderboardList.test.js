import { Flex } from '@chakra-ui/layout'
import { shallow } from 'enzyme'
import LeaderboardList from './LeaderboardList'
import LeaderboardItem from './LeaderboardItem'
import mockUsers from '../mocks/users'

describe('Leaderboard List', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LeaderboardList />)
  })
  it('renders a flex container for the list', () => {
    expect(wrapper.find(Flex).length).toBe(1)
  })

  it('displays a list of LeaderboardItems for every mocked user', () => {
    wrapper.update()
    expect(wrapper.find(LeaderboardItem).length).toBe(mockUsers.length)
  })
})
