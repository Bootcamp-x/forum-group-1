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
  let discussionsLocal = JSON.parse(
    localStorage.getItem("discussions") || "[]"
  );
  let discussion = discussionsLocal.find((d) => d.id == id);

  const [body, setBody] = React.useState("");
  let setDiscussionBody = (e) => {
    setBody(e.target.value);
  };
  const addResponse1 = () => {
    let username = JSON.parse(localStorage.getItem("username")).username;
    let date = new Date().toISOString();
    let response = { username, date, body };
    discussion.responses.push(response);
    localStorage.setItem("discussions", JSON.stringify(discussionsLocal));
  };
  return (
    <AppContext.Consumer>
      {({ discussions }) => {
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
              onInput={setDiscussionBody}
            />
            <Button width="100%" onClick={addResponse1}>
              REPLY
            </Button>
            <Responses
              discussion1={discussion}
              discussions={discussions}
            ></Responses>
          </Container>
        );
      }}
    </AppContext.Consumer>
  );
}
function Responses({ discussions, discussion1 }) {
  let discussion = discussions.find((d) => d.id == discussion1.id);

  // console.log(discussion);
  return discussion.responses.map((d, index) => (
    <Box key={index}>
      <Box>
        <Box>{d.title}</Box>
        <Text>{`by ${d.username} ${new Date(
          d.date
        ).toLocaleDateString()}| 1 comments`}</Text>
      </Box>
      <Box>{d.body}</Box>
    </Box>
  ));
}
export default Discussion;
