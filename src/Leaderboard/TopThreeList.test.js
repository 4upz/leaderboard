import { shallow } from 'enzyme'
import TopThreeList from './TopThreeList'
import { Avatar, AvatarGroup, Flex } from '@chakra-ui/react'
import AvatarDetails from './AvatarDetails'
import mockUsers from '../mocks/users'

describe('Top Three', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<TopThreeList users={mockUsers} />)
  })

  it('renders a Flex container and an AvatarGroup for its content', () => {
    expect(wrapper.find(Flex).length).toBe(1)
    expect(wrapper.find(AvatarGroup).length).toBe(1)
  })

  it('displays 3 avatars to represent the top three users', () => {
    expect(wrapper.find(Avatar).length).toBe(3)
  })

  it('displays badge details for each avatar with the correct places', () => {
    const avatarDetails = wrapper.find(AvatarDetails)
    expect(avatarDetails.length).toBe(3)
    expect(avatarDetails.first().props().placement).toBe('2')
    expect(avatarDetails.at(1).props().placement).toBe('1')
    expect(avatarDetails.at(2).props().placement).toBe('3')
  })
})
