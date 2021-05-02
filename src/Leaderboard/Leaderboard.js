import React from 'react'
import { Box } from '@chakra-ui/react'
import Filter from './Filter'
import LeaderboardList from './LeaderboardList'
import TopThreeList from './TopThreeList'
import leaderboardHelper from '../utils/leaderboardHelper'
import users from '../mocks/users'

function Leaderboard() {
  const [userPlacements, setUserPlacements] = React.useState(leaderboardHelper.sortByScore(users))
  const topThreeUsers = leaderboardHelper.firstThreeOf(userPlacements)
  return (
    <Box>
      <Filter />
      <TopThreeList users={topThreeUsers} />
      <LeaderboardList />
    </Box>
  )
}

export default Leaderboard
