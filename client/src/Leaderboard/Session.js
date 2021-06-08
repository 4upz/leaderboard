import React from 'react'
import { Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import SessionUser from './SessionUser'

function Session({ sessionUsers, handleSessionEnd, handleSessionCancel }) {
  const [wins, setWins] = React.useState({ playerOne: 0, playerTwo: 0 })
  const endSession = () => handleSessionEnd(wins)

  return (
    <Flex flexDir="column" align="center" rounded="3xl" p="1rem" minHeight="300px">
      <Flex
        align="center"
        rounded="3xl"
        flexDir={['column', 'row']}
        justify="center"
        minHeight="300px"
        width="100%"
        bgGradient="linear(to-br, rgba(85, 60, 154, 0.7), rgba(85, 60, 154, 0.3))"
      >
        <SessionUser name={sessionUsers.playerOne.name} player="playerOne" wins={wins} setWins={setWins} />
        <Text color="white" fontSize="6xl">
          vs.
        </Text>
        <SessionUser name={sessionUsers.playerTwo.name} player="playerTwo" wins={wins} setWins={setWins} />
      </Flex>
      <Text my={6} color="white">{`Spectator: ${sessionUsers.spectator.name}`}</Text>
      <ButtonGroup mb={6} colorScheme="whiteAlpha">
        <Button onClick={endSession}>End Session</Button>
        <Button variant="outline" onClick={handleSessionCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Session
