import { shallow } from 'enzyme'
import TopThree from './TopThree'
import { Avatar, AvatarBadge, AvatarGroup, Flex } from '@chakra-ui/react'

describe('Top Three', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TopThree />)
  })

  it('renders a Flex container and an AvatarGroup for its content', () => {
    expect(wrapper.find(Flex).length).toBe(1)
    expect(wrapper.find(AvatarGroup).length).toBe(1)
  })

  it('displays 3 avatars to represent the top three users', () => {
    expect(wrapper.find(Avatar).length).toBe(3)
  })

  it('displays a badge for each avatar with the correct places', () => {
    const avatars = wrapper.find(Avatar)
    expect(wrapper.find(AvatarBadge).length).toBe(3)
    expect(avatars.first().children().first().text()).toBe('2')
    expect(avatars.at(1).children().first().text()).toBe('1')
    expect(avatars.at(2).children().first().text()).toBe('3')
  })
})
