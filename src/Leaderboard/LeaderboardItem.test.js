import { shallow } from 'enzyme'
import LeaderboardItem from './LeaderboardItem'
import { Flex, Stat, Box, Avatar, Text } from '@chakra-ui/react'

describe('Leaderboard Item', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LeaderboardItem />)
  })
  it('renders a flex container and spacing for its content', () => {
    expect(wrapper.find(Flex).length).toBe(1)
  })

  it('renders a Stat component for the user position number', () => {
    expect(wrapper.find(Stat).length).toBe(1)
  })

  it('renders a box as the container for the user information', () => {
    expect(wrapper.find(Box).length).toBe(1)
  })

  describe('User Information Section', () => {
    it('renders an Avatar component that shows the user profile photo', () => {
      expect(wrapper.find(Avatar).length).toBe(1)
    })

    it('renders text for the user display name', () => {
      expect(wrapper.find(Text).first().text()).toBe('User Name')
    })

    it('renders the user win and loss record', () => {
      expect(wrapper.find(Text).at(1).text()).toBe('W - 2 | L - 4')
    })
  })
})
