import { shallow } from 'enzyme'
import LeaderboardItem from './LeaderboardItem'
import { Flex, Stat, StatNumber, Box, Avatar, Text } from '@chakra-ui/react'
import users from '../mocks/users'

const mockUser = users[0]

describe('Leaderboard Item', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<LeaderboardItem place={1} user={mockUser} />)
  })
  it('renders a flex container for its content', () => {
    expect(wrapper.find(Flex).length).toBe(1)
  })

  it('renders a Stat number component for the user position number', () => {
    expect(wrapper.find(Stat).length).toBe(1)
    expect(wrapper.find(StatNumber).text()).toBe('1')
  })

  it('renders a box as the container for the user information', () => {
    expect(wrapper.find(Box).length).toBe(1)
  })

  describe('User Information Section', () => {
    it('renders an Avatar component that shows the user profile photo', () => {
      expect(wrapper.find(Avatar).length).toBe(1)
    })

    it('renders text for the user display name', () => {
      expect(wrapper.find(Text).first().text()).toBe(mockUser.name)
    })

    it('renders the user win and loss record', () => {
      const expected = `${mockUser.wins} | ${mockUser.losses}`
      expect(wrapper.find(Text).at(1).text()).toBe(expected)
    })
  })
})
