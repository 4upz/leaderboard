import { shallow } from 'enzyme'
import { Box, Heading } from '@chakra-ui/react'
import App from './App'

test('renders a container for the App', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.find(Box).exists()).toBeTruthy()
  expect(wrapper.find('header').exists()).toBeTruthy()
  expect(wrapper.find(Heading).text()).toBe('Leaderboard')
})
