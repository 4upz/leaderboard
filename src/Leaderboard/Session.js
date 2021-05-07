import React from 'react'
import { Avatar, Button, ButtonGroup, Flex, Heading, Text } from '@chakra-ui/react'

export function Session({ sessionUsers, handleSessionEnd, handleSessionCancel }) {
  return (
    <Flex flexDir="column" align="center">
      <Heading color="white" mb={6}>{`${sessionUsers.playerOne.name} vs. ${sessionUsers.playerTwo.name}`}</Heading>
      <Text color="white">{`Spectator: ${sessionUsers.spectator.name}`}</Text>
      <Flex
        align="center"
        flexDir={['column', 'row']}
        justify="center"
        borderColor="white"
        borderWidth="3px"
        borderRadius="2rem"
        height="500px"
        width="100%"
        p={6}
        m={6}
      >
        <Avatar bg="purple.700" size="2xl" mx={6} />
        <Text color="white" fontSize="6xl">
          vs.
        </Text>
        <Avatar bg="purple.700" size="2xl" mx={6} />
      </Flex>
      <ButtonGroup colorScheme="whiteAlpha">
        <Button onClick={handleSessionEnd}>End Session</Button>
        <Button variant="outline" onClick={handleSessionCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </Flex>
  )
}
