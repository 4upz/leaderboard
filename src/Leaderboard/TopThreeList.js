import React from 'react'
import AvatarDetails from './AvatarDetails'
import { Flex, AvatarGroup, Avatar } from '@chakra-ui/react'

const avatarProps = {
  showBorder: true,
  borderColor: 'yellow.300',
  borderWidth: '3px',
  bg: 'purple.700',
}

function TopThreeList({ users }) {
  return (
    <Flex justify="center" pb={16}>
      <AvatarGroup>
        <Avatar {...avatarProps} showBorder size="xl">
          <AvatarDetails user={users[1]} placement="2" />
        </Avatar>
        <Avatar
          {...avatarProps}
          zIndex="2"
          size="2xl"
          borderWidth="5px"
          boxShadow="0 3px 10px 5px rgba(246, 224, 94, 0.3)"
        >
          <AvatarDetails
            user={users[0]}
            placement="1"
            placementSize="24px"
            nameBottom="-30%"
            nameSize="18px"
            scoreBottom="-50%"
            scoreFontSize="16px"
          />
        </Avatar>
        <Avatar {...avatarProps} size="xl">
          <AvatarDetails user={users[2]} placement="3" />
        </Avatar>
      </AvatarGroup>
    </Flex>
  )
}

export default TopThreeList
