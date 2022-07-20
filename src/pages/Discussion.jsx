import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Box,
  Container,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AppContext from "../components/AppContext";

function Discussion() {
  return (
    <Container
    width="60%"
    backgroundColor="white"
    >
      <Heading>CUALQUIER COSA</Heading>
      <Text>YO LO VOY A REEMPLAZAR</Text>
      <Text>-- -------------- - --------- -----------------</Text>
      <Textarea
        padding={"0.5rem"}
        height="91.6px"
        placeholder="Body title"
        resize={"none"}
        _active={{
          outline: "rgba(255, 102, 0, 0.5);",
          borderColor: "rgba(255, 102, 0, 0.5);",
          boxShadow: "none",
        }}
        _focus={{
          outline: "rgba(255, 102, 0, 0.5);",
          borderColor: "rgba(255, 102, 0, 0.5);",
          boxShadow: "none",
        }}
      />
      <Button
      width="100%">REPLY</Button>
    </Container>
  );
}

export default Discussion;
