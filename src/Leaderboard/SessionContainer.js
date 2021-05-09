import React from 'react'
import Session from './Session'
import SessionIntro from './SessionIntro'
import leaderboardHelper from '../utils/leaderboardHelper'

function SessionContainer({ users, handleUserUpdate }) {
  const [isStarted, setStarted] = React.useState(false)
  const [sessionUsers, setSessionUsers] = React.useState({})
  l
  const openSession = (sessionUsers) => {
    setStarted(true)
    setSessionUsers({
      playerOne: leaderboardHelper.getUserByID(sessionUsers.playerOneID, users),
      playerTwo: leaderboardHelper.getUserByID(sessionUsers.playerTwoID, users),
      spectator: leaderboardHelper.getUserByID(sessionUsers.spectatorID, users),
    })
  }

  const closeSession = () => {
    setSessionUsers({})
    setStarted(false)
  }

  const endSession = (sessionWins) => {
    const playerOneTotalWins = sessionUsers.playerOne.wins + sessionWins.playerOne
    const playerTwoTotalWins = sessionUsers.playerTwo.wins + sessionWins.playerTwo
    const updatedPlayerOne = {
      ...sessionUsers.playerOne,
      wins: playerOneTotalWins,
      losses: sessionUsers.playerOne.losses + sessionWins.playerTwo,
    }
    const updatedPlayerTwo = {
      ...sessionUsers.playerTwo,
      wins: playerTwoTotalWins,
      losses: sessionUsers.playerTwo.losses + sessionWins.playerOne,
    }
    let updatedUsers = [...users]
    updatedUsers[updatedUsers.indexOf(sessionUsers.playerOne)] = updatedPlayerOne
    updatedUsers[updatedUsers.indexOf(sessionUsers.playerTwo)] = updatedPlayerTwo
    handleUserUpdate(updatedUsers)
    closeSession()
  }

  if (isStarted) {
    return <Session sessionUsers={sessionUsers} handleSessionEnd={endSession} handleSessionCancel={closeSession} />
  } else {
    return <SessionIntro users={users} handleSessionStart={openSession} />
  }
}

export default SessionContainer
