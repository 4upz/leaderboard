import React from 'react'
import { Flex, Box, Stat, StatNumber, StatArrow, Avatar, HStack, Text } from '@chakra-ui/react'

function LeaderboardItem({ place, user }) {
  return (
    <Flex w="400px" my={3} align="center">
      <Stat w="15px" size="md">
        <StatNumber color="white">{place}</StatNumber>
        <StatArrow type="increase" />
      </Stat>
      <Box bg="whiteAlpha.400" py={2} px={5} borderRadius="20px" justifySelf="center" w="90%">
        <HStack justify="space-between">
          <Avatar bg="purple.700" />
          <Text color="white">{user.name}</Text>
          <Text color="white">
            <Text as="span" color="green.300">
              {user.wins}{' '}
            </Text>
            |
            <Text as="span" color="red.300">
              {' '}
              {user.losses}
            </Text>
          </Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default LeaderboardItem
