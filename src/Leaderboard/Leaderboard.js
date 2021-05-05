import React from 'react'
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import LeaderboardList from './LeaderboardList'
import TopThreeList from './TopThreeList'
import leaderboardHelper from '../utils/leaderboardHelper'
import users from '../mocks/users'

const containerProps = {
  p: 3,
  minH: '90vh',
  width: ['100%', '60%'],
  bg: 'purple.700',
  bgGradient: 'linear(to-tr, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))',
  borderRadius: '2rem',
}

function Leaderboard() {
  const [userPlacements] = React.useState(leaderboardHelper.sortByScore(users))
  const topThreeUsers = leaderboardHelper.firstThreeOf(userPlacements)
  const remainingUsers = leaderboardHelper.afterFirstThreeOf(userPlacements)
  return (
    <Box {...containerProps} p={6}>
      <Tabs align="center" variant="solid-rounded" colorScheme="whiteAlpha">
        <TabList>
          <Tab color="white">Leaderboard</Tab>
          <Tab color="white">Session</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading color="white" textAlign="center" mb={6}>
              Leaderboard
            </Heading>
            <TopThreeList users={topThreeUsers} />
            <LeaderboardList users={remainingUsers} />
          </TabPanel>
          <TabPanel>
            <Heading color="white" textAlign="center" mb={6}>
              Session
            </Heading>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Leaderboard
