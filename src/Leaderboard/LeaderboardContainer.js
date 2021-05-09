import React from 'react'
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import leaderboardHelper from '../utils/leaderboardHelper'
import SessionContainer from './SessionContainer'
import Leaderboard from './Leaderboard'
import users from '../mocks/users'

const containerProps = {
  p: 3,
  minH: '90vh',
  width: ['100%', '60%'],
  bgGradient: 'linear(to-br, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))',
  rounded: '3xl',
}

function LeaderboardContainer() {
  const [availableUsers, updateAvailableUsers] = React.useState(leaderboardHelper.sortByScore(users))
  const topThreeUsers = leaderboardHelper.firstThreeOf(availableUsers)
  const remainingUsers = leaderboardHelper.afterFirstThreeOf(availableUsers)

  const handleUserUpdate = (updatedUsers) => updateAvailableUsers(leaderboardHelper.sortByScore(updatedUsers))

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
            <SessionContainer users={availableUsers} handleUserUpdate={handleUserUpdate} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default LeaderboardContainer
