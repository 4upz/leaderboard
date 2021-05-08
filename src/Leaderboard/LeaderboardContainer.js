import React from 'react'
import { Box, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import LeaderboardList from './LeaderboardList'
import TopThreeList from './TopThreeList'
import leaderboardHelper from '../utils/leaderboardHelper'
import users from '../mocks/users'
import SessionContainer from './SessionContainer'

const containerProps = {
  p: 3,
  minH: '90vh',
  width: ['100%', '60%'],
  bgGradient: 'linear(to-br, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))',
  rounded: '3xl',
}

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

function LeaderboardContainer() {
  const [availableUsers] = React.useState(leaderboardHelper.sortByScore(users))
  const topThreeUsers = leaderboardHelper.firstThreeOf(availableUsers)
  const remainingUsers = leaderboardHelper.afterFirstThreeOf(availableUsers)
  return (
    <Box {...containerProps} py={6}>
      <Tabs align="center" variant="solid-rounded" colorScheme="pink">
        <TabList>
          <Tab color="white">Leaderboard</Tab>
          <Tab color="white">Session</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Leaderboard topThreeUsers={topThreeUsers} remainingUsers={remainingUsers} />
          </TabPanel>
          <TabPanel>
            <SessionContainer users={availableUsers} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default LeaderboardContainer
