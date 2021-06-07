import { useEffect, useState } from 'react'
import { Box, Spinner, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import leaderboardHelper from '../utils/leaderboardHelper'
import SessionContainer from './SessionContainer'
import Leaderboard from './Leaderboard'
import { getUsers } from '../api/users'

const containerProps = {
  p: 3,
  minH: '90vh',
  width: ['100%', '60%'],
  bgGradient: 'linear(to-br, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))',
  rounded: '3xl',
}

function LeaderboardContainer() {
  const [availableUsers, updateAvailableUsers] = useState([])

  useEffect(() => {
    getUsers().then((users) => updateAvailableUsers(leaderboardHelper.sortByScore(users)))
  }, [])

  const handleUserUpdate = (updatedUsers) => updateAvailableUsers(leaderboardHelper.sortByScore(updatedUsers))

  const topThreeUsers = leaderboardHelper.firstThreeOf(availableUsers)
  const remainingUsers = leaderboardHelper.afterFirstThreeOf(availableUsers)

  if (availableUsers.length > 0) {
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
  } else {
    return (
      <Box>
        <Spinner color="white" size="xl" />
      </Box>
    )
  }
}

export default LeaderboardContainer
