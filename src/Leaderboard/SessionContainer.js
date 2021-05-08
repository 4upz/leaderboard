import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Session from './Session'
import SessionIntro from './SessionIntro'
import leaderboardHelper from '../utils/leaderboardHelper'

function SessionContainer({ users }) {
  const [isStarted, setStarted] = React.useState(false)
  const [sessionUsers, setSessionUsers] = React.useState({})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const startSession = (sessionUsers) => {
    setStarted(true)
    setSessionUsers({
      playerOne: leaderboardHelper.getUserByID(sessionUsers.playerOneID, users),
      playerTwo: leaderboardHelper.getUserByID(sessionUsers.playerTwoID, users),
      spectator: leaderboardHelper.getUserByID(sessionUsers.spectatorID, users),
    })
  }

  const cancelSession = () => {
    setSessionUsers({})
    setStarted(false)
  }

  const endSession = () => {
    cancelSession()
  }

  if (isStarted) {
    return <Session sessionUsers={sessionUsers} handleSessionEnd={endSession} handleSessionCancel={cancelSession} />
  } else {
    return (
      <SessionIntro
        onClick={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        users={users}
        handleSessionStart={startSession}
      />
    )
  }
}

export default SessionContainer
