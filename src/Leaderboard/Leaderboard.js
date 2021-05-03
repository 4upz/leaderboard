import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Filter from './Filter'
import LeaderboardList from './LeaderboardList'
import TopThreeList from './TopThreeList'
import leaderboardHelper from '../utils/leaderboardHelper'
import users from '../mocks/users'

const containerProps = {
  p: 3,
  minH: '80vh',
  width: ['100%', '60%'],
  bg: 'purple.700',
  bgGradient: 'linear(to-br, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))',
  borderRadius: '2rem',
}

function Leaderboard() {
  const [userPlacements] = React.useState(leaderboardHelper.sortByScore(users))
  const topThreeUsers = leaderboardHelper.firstThreeOf(userPlacements)
  const remainingUsers = leaderboardHelper.afterFirstThreeOf(userPlacements)
  return (
    <Box {...containerProps}>
      <Heading color="white" textAlign="center" my={6}>
        Leaderboard
      </Heading>
      <Filter />
      <TopThreeList users={topThreeUsers} />
      <LeaderboardList users={remainingUsers} />
    </Box>
  )
}

export default Leaderboard
