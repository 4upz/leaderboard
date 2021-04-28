import React from 'react'
import { Button, ButtonGroup, Flex } from '@chakra-ui/react'

function Filter() {
  return (
    <Flex my="6" justify="center" flex>
      <ButtonGroup spacing="4" variant="ghost" colorScheme="whiteAlpha">
        <Button>Week</Button>
        <Button mx="0">Month</Button>
        <Button>All</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default Filter
