import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
function LoginBox() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={"true"}
      >
        <ModalContent
        display="flex"
        margin="auto"
        maxWidth="360px"
        >
          <ModalHeader
          margin="10px 0px 0px 0px"
          fontFamily="Roboto, sans-serif"
          color="#34495e"
          fontSize="2em"
          fontWeight="normal"
          textAlign="center"
          >Welcome to Chaos</ModalHeader>
          <ModalBody
          display="flex"
          flexDirection="column"
          alignItems="center"
          >
            <FormControl
            margin="16px 0px "
            maxWidth="297px">
              <Input ref={initialRef} placeholder='Enter your username' />
            </FormControl>

            <FormControl
            margin="16px 0px"
            maxWidth="297px">
              <Input placeholder='Enter your email' />
            </FormControl>
          </ModalBody>

          <ModalFooter
          display="flex"
          padding="0"
          margin="16px 15px 20px 15px"
          >
            <Button
            backgroundColor="#ff6600"
            color="white"
            cursor="pointer"
            padding="0.75rem 0px"
            width="100%"
            >
              ENTER
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginBox;
