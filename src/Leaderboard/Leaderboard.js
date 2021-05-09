import React from 'react'
import TopThreeList from './TopThreeList'
import LeaderboardList from './LeaderboardList'
import { Box, Heading } from '@chakra-ui/react'

function Leaderboard({ topThreeUsers, remainingUsers }) {
  return (
    <Box>
      <Heading color="white" textAlign="center" my={6}>
        Leaderboard
      </Heading>
      <TopThreeList users={topThreeUsers} />
      <LeaderboardList users={remainingUsers} />
    </Box>
  )
}

export default Leaderboard
