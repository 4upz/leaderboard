import React from 'react'
import { Avatar, ButtonGroup, IconButton, Text, VStack } from '@chakra-ui/react'
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

export default SessionUser
