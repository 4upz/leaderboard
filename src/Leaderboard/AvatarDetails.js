import React from 'react'
import { AvatarBadge, Text } from '@chakra-ui/react'

function AvatarDetails({ placement, placementSize, nameBottom, nameSize, scoreBottom, scoreFontSize }) {
  const placementBadgeProps = {
    boxSize: '1.5em',
    bg: 'yellow.300',
    border: 'none',
    fontSize: placementSize || '18px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '-15%',
  }

  const nameBadgeProps = {
    boxSize: '0',
    color: 'white',
    textTransform: 'capitalize',
    border: 'none',
    fontSize: nameSize || '16px',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: nameBottom || '-30%',
  }

  const scoreBadgeProps = {
    bottom: scoreBottom || '-55%',
    fontSize: scoreFontSize || '14px',
  }

  return (
    <>
      <AvatarBadge {...placementBadgeProps}>{placement}</AvatarBadge>
      <AvatarBadge {...nameBadgeProps}>User</AvatarBadge>
      <AvatarBadge {...nameBadgeProps} {...scoreBadgeProps}>
        <Text as="span" color="yellow.300" fontWeight="bold">
          {11}
        </Text>
        -
        <Text as="span" color="red.300">
          {12}
        </Text>
      </AvatarBadge>
    </>
  )
}

export default AvatarDetails
