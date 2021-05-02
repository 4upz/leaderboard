import React from 'react'
import AvatarDetails from './AvatarDetails'
import { Flex, AvatarGroup, Avatar } from '@chakra-ui/react'

const avatarProps = {
  showBorder: true,
  borderColor: 'yellow.300',
  bg: 'purple.700',
}

function TopThreeList() {
  return (
    <Flex justify="center" pb={16}>
      <AvatarGroup>
        <Avatar {...avatarProps} showBorder size="xl">
          <AvatarDetails placement="2" />
        </Avatar>
        <Avatar {...avatarProps} zIndex="2" size="2xl">
          <AvatarDetails
            placement="1"
            placementSize="24px"
            nameBottom="-30%"
            nameSize="18px"
            scoreBottom="-50%"
            scoreFontSize="16px"
          />
        </Avatar>
        <Avatar {...avatarProps} size="xl">
          <AvatarDetails placement="3" />
        </Avatar>
      </AvatarGroup>
    </Flex>
  )
}

export default TopThreeList
