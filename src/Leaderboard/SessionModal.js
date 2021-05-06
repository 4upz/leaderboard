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

export function SessionModal({ isOpen, onClose, users }) {
  const initialSessionUsers = { playerOneID: -1, playerTwoID: -1, spectatorID: -1 }
  const [sessionUsers, setSessionUsers] = React.useState(initialSessionUsers)

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
    return id !== sessionUsers.playerOneID && id !== sessionUsers.playerTwoID && id !== sessionUsers.spectatorID
  }

  const hasNotSelectedValidUsers = () =>
    sessionUsers.playerOneID < 0 || sessionUsers.playerTwoID < 0 || sessionUsers.spectatorID < 0

  const handleChange = (event) => {
    setSessionUsers({ ...sessionUsers, [event.target.name]: parseInt(event.target.value) || -1 })
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
              value={sessionUsers.playerOneID}
              onChange={handleChange}
              placeholder="Player One"
            >
              {userOptionsFor(sessionUsers.playerOneID)}
            </Select>
            <Select
              name="playerTwoID"
              value={sessionUsers.playerTwoID}
              onChange={handleChange}
              placeholder="Player Two"
            >
              {userOptionsFor(sessionUsers.playerTwoID)}
            </Select>
            <Select name="spectatorID" value={sessionUsers.spectatorID} onChange={handleChange} placeholder="Spectator">
              {userOptionsFor(sessionUsers.spectatorID)}
            </Select>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button isDisabled={hasNotSelectedValidUsers()} colorScheme="whiteAlpha" onClick={onClose}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
