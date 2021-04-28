import React from 'react'
import { Box } from '@chakra-ui/react'
import Filter from './Filter'
import LeaderboardList from './LeaderboardList'
import TopThree from './TopThree'

function Leaderboard() {
  return (
    <Box>
      <Filter />
      <TopThree />
      <LeaderboardList />
    </Box>
  )
}

export default Leaderboard
