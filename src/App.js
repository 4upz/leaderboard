import Leaderboard from './Leaderboard/Leaderboard'
import { Flex } from '@chakra-ui/react'

const containerProps = {
  justify: 'center',
  align: 'center',
  w: '100%',
  bgGradient: 'linear(to-tr, purple.700, purple.900)',
  height: ['initial', '100vh'],
  py: 6,
  className: 'App',
}

function App() {
  return (
    <Flex {...containerProps}>
      <Leaderboard />
    </Flex>
  )
}

export default App
