import React from 'react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
} from '@chakra-ui/react'

export function SessionModal({ isOpen, onClose, users, startSession }) {
  const initialSessionUsers = { playerOneID: -1, playerTwoID: -1, spectatorID: -1 }
  const [sessionUserIDs, setSessionUserIDs] = React.useState(initialSessionUsers)

  const userOptionsFor = (selectedUser) =>
    users
      .filter((user) => unselectedUsers(user, selectedUser))
      .map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))

  const unselectedUsers = ({ id }, selectedUser) => {
    if (id === selectedUser) return true
    return id !== sessionUserIDs.playerOneID && id !== sessionUserIDs.playerTwoID && id !== sessionUserIDs.spectatorID
  }

  const hasNotSelectedValidUsers = () =>
    sessionUserIDs.playerOneID < 0 || sessionUserIDs.playerTwoID < 0 || sessionUserIDs.spectatorID < 0

  const handleChange = (event) => {
    setSessionUserIDs({ ...sessionUserIDs, [event.target.name]: parseInt(event.target.value) || -1 })
  }

  const handleClose = () => {
    onClose()
    startSession(sessionUserIDs)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent top={6} bg="pink.500" color="white">
        <ModalHeader>New Session</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={6}>
            <Select
              name="playerOneID"
              value={sessionUserIDs.playerOneID}
              onChange={handleChange}
              placeholder="Player One"
            >
              {userOptionsFor(sessionUserIDs.playerOneID)}
            </Select>
            <Select
              name="playerTwoID"
              value={sessionUserIDs.playerTwoID}
              onChange={handleChange}
              placeholder="Player Two"
            >
              {userOptionsFor(sessionUserIDs.playerTwoID)}
            </Select>
            <Select
              name="spectatorID"
              value={sessionUserIDs.spectatorID}
              onChange={handleChange}
              placeholder="Spectator"
            >
              {userOptionsFor(sessionUserIDs.spectatorID)}
            </Select>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button isDisabled={hasNotSelectedValidUsers()} colorScheme="whiteAlpha" onClick={handleClose}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
