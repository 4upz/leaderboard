import { shallow } from 'enzyme'
import { Box, Heading } from '@chakra-ui/react'
import App from './App'
import Leaderboard from './Leaderboard/Leaderboard'

describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })
  it('renders a container for the App', () => {
    expect(wrapper.find(Box).length).toBe(1)
    expect(wrapper.find('header').length).toBe(1)
    expect(wrapper.find(Heading).text()).toBe('Leaderboard')
  })

  it('renders a Leaderboard component', () => {
    expect(wrapper.find(Leaderboard).length).toBe(1)
  })
})
