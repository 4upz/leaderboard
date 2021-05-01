import { Box, Heading } from '@chakra-ui/react'
import Leaderboard from './Leaderboard/Leaderboard'

function App() {
  return (
    <Box w="100%" bgGradient="linear(to-t, purple.700, purple.900)" height="100vh" className="App">
      <header className="App-header">
        <Heading color="white" textAlign="center" my={6}>
          Leaderboard
        </Heading>
      </header>
      <Leaderboard />
    </Box>
  )
}

export default App
