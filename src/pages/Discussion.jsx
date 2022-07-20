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
import { useParams } from "react-router-dom";

import React from "react";
import AppContext from "../components/AppContext";

function Discussion() {
  let { id } = useParams();
  let discussions = JSON.parse(localStorage.getItem("discussions") || "[]");
  let discussion = discussions.find((d) => d.id == id);

  return (
    <Container width="60%" backgroundColor="white">
      <Heading>{discussion.title}</Heading>
      <Text>{discussion.username + " - " + discussion.date}</Text>
      <Text>{discussion.body}</Text>
      <Text>-------------------------------------------</Text>
      <Textarea
        padding={"0.5rem"}
        height="91.6px"
        placeholder="Write reply"
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
      <Button width="100%">REPLY</Button>
    </Container>
  );
}

export default Discussion;
