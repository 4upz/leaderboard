import LeaderboardContainer from './Leaderboard/LeaderboardContainer'
import { Flex } from '@chakra-ui/react'

const containerProps = {
  justify: 'center',
  align: 'center',
  w: '100%',
  bgGradient: 'linear(to-tr, pink.300, purple.500)',
  height: ['initial', '100vh'],
  py: 6,
  className: 'App',
}

function App() {
  return (
    <Flex {...containerProps}>
      <LeaderboardContainer />
    </Flex>
  )
}

export default App
