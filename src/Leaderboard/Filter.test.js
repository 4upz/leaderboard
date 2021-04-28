import { shallow } from 'enzyme'
import { Flex, Button, ButtonGroup } from '@chakra-ui/react'
import Filter from './Filter'

describe('Filter Buttons', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Filter />)
  })
  it('renders a flex container and button group for the buttons', () => {
    expect(wrapper.find(Flex).length).toBe(1)
    expect(wrapper.find(ButtonGroup).length).toBe(1)
  })

  it('renders a button for each filter type', () => {
    const filterButtons = wrapper.find(Button)
    expect(filterButtons.length).toBe(3)
    expect(filterButtons.at(0).text()).toBe('Week')
    expect(filterButtons.at(1).text()).toBe('Month')
    expect(filterButtons.at(2).text()).toBe('All')
  })
})
