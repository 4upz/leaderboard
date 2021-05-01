import React from 'react'
import { Flex } from '@chakra-ui/react'
import LeaderboardItem from './LeaderboardItem'
import users from '../mocks/users'

function LeaderboardList() {
  return (
    <Flex m="6" direction="column" align="center">
      {users.map((user, index) => (
        <LeaderboardItem key={user.id} place={index + 1} user={user} />
      ))}
    </Flex>
  )
}

export default LeaderboardList
