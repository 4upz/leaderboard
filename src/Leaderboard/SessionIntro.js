import React from 'react'
import { Button, Container, Flex, Heading } from '@chakra-ui/react'
import { SessionModal } from './SessionModal'

export function SessionIntro({ users, onClick, onClose, isOpen, handleSessionStart }) {
  return (
    <Flex flexDir="column" align="center">
      <Heading color="white" textAlign="center" my={6}>
        Session
      </Heading>
      <Container color="white">
        Start a new 1v1 session between players on this leaderboard. An additional player will be required to act as the
        spectator in order to validate the series. May the best man win.
      </Container>
      <Button colorScheme="whiteAlpha" size="lg" my={6} onClick={onClick}>
        Start a new session
      </Button>

      <SessionModal isOpen={isOpen} onClose={onClose} users={users} startSession={handleSessionStart} />
    </Flex>
  )
}
