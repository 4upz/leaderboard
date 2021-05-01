import React from 'react'
import { Flex, AvatarGroup, Avatar, AvatarBadge } from '@chakra-ui/react'

const avatarProps = {
  showBorder: true,
  borderColor: 'yellow.300',
  bg: 'purple.700',
}

const avatarBadgeProps = {
  boxSize: '1.5em',
  bg: 'yellow.300',
  border: 'none',
  fontSize: '18px',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: '-15%',
}

function TopThree() {
  return (
    <Flex justify="center">
      <AvatarGroup>
        <Avatar {...avatarProps} showBorder size="xl">
          <AvatarBadge {...avatarBadgeProps}>2</AvatarBadge>
        </Avatar>
        <Avatar {...avatarProps} zIndex="2" size="2xl">
          <AvatarBadge {...avatarBadgeProps} fontSize="24px">
            1
          </AvatarBadge>
        </Avatar>
        <Avatar {...avatarProps} size="xl">
          <AvatarBadge {...avatarBadgeProps}>3</AvatarBadge>
        </Avatar>
      </AvatarGroup>
    </Flex>
  )
}

export default TopThree
