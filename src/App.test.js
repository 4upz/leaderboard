import { shallow } from 'enzyme'
import { Flex } from '@chakra-ui/react'
import App from './App'
import LeaderboardContainer from './Leaderboard/LeaderboardContainer'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('renders a container for the App', () => {
    expect(wrapper.find(Flex).length).toBe(1)
  })

  it('renders a Leaderboard component', () => {
    expect(wrapper.find(LeaderboardContainer).length).toBe(1)
  })
})
