import React from 'react'
import { Flex } from '@chakra-ui/react'
import LeaderboardItem from './LeaderboardItem'

function LeaderboardList({ users }) {
  return (
    <Flex m="6" direction="column" align="center" maxH={['initial', '600px']} overflowY="auto">
      {users.map((user, index) => (
        <LeaderboardItem key={user.id} place={4 + index} user={user} />
      ))}
    </Flex>
  )
}

export default LeaderboardList
