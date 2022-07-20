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
  Link,
  color,
  border,
} from '@chakra-ui/react'
import { Button, useDisclosure } from "@chakra-ui/react";
import React from "react";
function LoginBox() {
const [username,setUsername] = React.useState("");
const [email,setEmail] = React.useState("");
const setUsernameLogin = (e) => {
  setUsername(e.target.value);
};
const setEmailLogin = (e) => {
  setEmail(e.target.value);
};
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const createUser = (e) => {
      e.preventDefault();
      let user = { username, email };
      localStorage.setItem("username", JSON.stringify(user));
      window.location = "/";
    };

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
              <Input
              onInput={setUsernameLogin}
              placeholder='Enter your username' />
            </FormControl>

            <FormControl
            margin="16px 0px"
            maxWidth="297px">
              <Input
              onInput={setEmailLogin}
              placeholder='Enter your email' />
            </FormControl>
          </ModalBody>

          <ModalFooter
          display="flex"
          padding="0"
          margin="16px 15px 20px 15px"
          >
            <Link
            display="flex"
            justifyContent="center"
            textDecoration="none"
            backgroundColor="#ff6600"
            color="white"
            cursor="pointer"
            padding="0.75rem 0px"
            width="100%"
            borderRadius="0.25rem"
            border="1px solid #ff6600"
            transition="0.2s"
            _hover={{
              textDecoration:"none",
              color:"orange",
              backgroundColor:"white",
              border:"1px solid #ff6600"
            }}
            onClick={createUser}
            >
              ENTER
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default LoginBox;
