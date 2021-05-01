import React from 'react'
import { Flex, Box, Stat, StatNumber, StatArrow, Avatar, HStack, Text } from '@chakra-ui/react'

function LeaderboardItem() {
  return (
    <Flex w="400px" my={3}>
      <Stat w="15px" size="md">
        <StatNumber color="white">4</StatNumber>
        <StatArrow type="increase" />
      </Stat>
      <Box bg="whiteAlpha.400" py={2} px={5} borderRadius="20px" justifySelf="center" w="90%">
        <HStack justify="space-between">
          <Avatar bg="teal.500" />
          <Text color="white">User Name</Text>
          <Text color="white">
            <Text as="span" color="green.200">
              W{' '}
            </Text>
            - 2{' '}
            <Text as="span" color="purple.50">
              |{' '}
            </Text>
            <Text as="span" color="red.200">
              L
            </Text>{' '}
            - 4
          </Text>
        </HStack>
      </Box>
    </Flex>
  )
}

export default LeaderboardItem
