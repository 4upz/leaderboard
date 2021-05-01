import React from 'react'
import { Flex } from '@chakra-ui/react'
import users from '../mocks/users'
import LeaderboardItem from './LeaderboardItem'

function LeaderboardList() {
  return (
    <Flex m="6" direction="column" align="center">
      {users.map((user) => (
        <LeaderboardItem key={user.id} user={user} />
      ))}
    </Flex>
  )
}

export default LeaderboardList
