import React from 'react'
import { Avatar, Button, ButtonGroup, Flex, IconButton, Text, VStack } from '@chakra-ui/react'
import { AddIcon, MinusIcon } from '@chakra-ui/icons'

function SessionUser({ name, player, wins, setWins }) {
  const increaseWins = () => setWins({ ...wins, [player]: wins[player] + 1 })
  const decreaseWins = () => {
    const playerWins = wins[player]
    if (playerWins > 0) setWins({ ...wins, [player]: playerWins - 1 })
  }
  const bgColor = '246, 135, 179'
  return (
    <VStack
      bgGradient={`linear(to-br, rgba(${bgColor}, 0.7), rgba(${bgColor}, 0.3))`}
      rounded="lg"
      shadow="base"
      p={6}
      m={6}
    >
      <Avatar bg="purple.700" size="2xl" mx={6} />
      <Text fontSize="xl" color="white">
        {name}
      </Text>
      <Text fontSize="3xl" color="white">
        {wins[player]}
      </Text>
      <ButtonGroup isAttached>
        <IconButton aria-label="Increase Win" icon={<AddIcon />} colorScheme="whiteAlpha" onClick={increaseWins} />
        <IconButton aria-label="Decrease Win" icon={<MinusIcon />} colorScheme="blackAlpha" onClick={decreaseWins} />
      </ButtonGroup>
    </VStack>
  )
}

function Session({ sessionUsers, handleSessionEnd, handleSessionCancel }) {
  const [wins, setWins] = React.useState({ playerOne: 0, playerTwo: 0 })

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
        <Button onClick={handleSessionEnd}>End Session</Button>
        <Button variant="outline" onClick={handleSessionCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Session
