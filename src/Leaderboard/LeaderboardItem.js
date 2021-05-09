import React from 'react'
import { Avatar, Box, Flex, HStack, Stat, StatArrow, StatNumber, Text } from '@chakra-ui/react'

function LeaderboardItem({ place, user }) {
  return (
    <Flex w={['100%', '50%']} my={3} align="center">
      <Stat w="15px" size="md" mx={3}>
        <StatNumber color="white">{place}</StatNumber>
        <StatArrow type={user.hasIncreased ? 'increase' : 'decrease'} />
      </Stat>
      <Box bg="whiteAlpha.300" py={2} px={5} borderRadius="20px" justifySelf="center" w="90%">
        <HStack justify="space-between">
          <Avatar bg="purple.700" />
          <Text color="white">{user.name}</Text>
          <Text color="white">
            <Text as="span" color="green.300">
              {user.wins}
            </Text>
            -
            <Text as="span" color="red.300">
              {user.losses}
            </Text>
          </Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default LeaderboardItem
